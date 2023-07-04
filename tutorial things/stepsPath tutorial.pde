// motion blur template by beesandbombs
// CC BY-SA 3.0 license because it's using code from Wikipedia

int[][] result;
float t, c;

void draw() {

  if (!recording) {
    t = mouseX*1.0/width;
    c = mouseY*1.0/height;
    if (mousePressed)
      println(c);
    draw_();
  } else {
    for (int i=0; i<width*height; i++)
      for (int a=0; a<3; a++)
        result[i][a] = 0;

    c = 0;
    for (int sa=0; sa<samplesPerFrame; sa++) {
      t = map(frameCount-1 + sa*shutterAngle/samplesPerFrame, 0, numFrames, 0, 1);
      t %= 1;
      draw_();
      loadPixels();
      for (int i=0; i<pixels.length; i++) {
        result[i][0] += pixels[i] >> 16 & 0xff;
        result[i][1] += pixels[i] >> 8 & 0xff;
        result[i][2] += pixels[i] & 0xff;
      }
    }

    loadPixels();
    for (int i=0; i<pixels.length; i++)
      pixels[i] = 0xff << 24 | 
        int(result[i][0]*1.0/samplesPerFrame) << 16 | 
        int(result[i][1]*1.0/samplesPerFrame) << 8 | 
        int(result[i][2]*1.0/samplesPerFrame);
    updatePixels();
    
    if (frameCount<=numFrames)
    {
      saveFrame("fr###.gif");
      println(frameCount,"/",numFrames);
    }
    
    if (frameCount==numFrames)
      stop();
  }
}

//////////////////////////////////////////////////////////////////////////////

int samplesPerFrame = 7;
int numFrames = 40;        
float shutterAngle = 4.0;

boolean recording = true;

//convert d to (x,y)
PVector d2xy(int n, int d) {
    int rx, ry, s, t=d;
    float x,y;
    x = 0;
    y = 0;
    for (s=1; s<n; s*=2) {
        rx = 1 & (t/2);
        ry = 1 & (t ^ rx);
        PVector res = rot(s, new PVector(x,y), rx, ry);
        x = res.x;
        y = res.y;
        x += s * rx;
        y += s * ry;
        t /= 4;
    }
    
    return new PVector(x,y);
}

//rotate/flip a quadrant appropriately
PVector rot(int n, PVector input, int rx, int ry) {
  float x = input.x;
  float y = input.y;
    if (ry == 0) {
        if (rx == 1) {
            x = n-1 - x;
            y = n-1 - y;
        }

        //Swap x and y
        float t  = x;
        x = y;
        y = t;
    }
    return new PVector(x,y);
}

int curveDepth = 5;

int N = (int)pow(4,curveDepth);

ArrayList<PVector> positionsList = new ArrayList<PVector>();

void fillHilbertPositionsList() // called at setup()
{
  for(int i=0;i<N;i++)
  {
    positionsList.add(d2xy(N,i)); // d2xy only called during setup()
  }
}

PVector getCurvePositionFromIndex(int i)
{
  PVector position1 = positionsList.get(i);
  float mappedx = map(position1.x, 0, pow(2,curveDepth), 0.1*width, 0.9*width);
  float mappedy = map(position1.y, 0, pow(2,curveDepth), 0.1*height, 0.9*height);
  return new PVector(mappedx,mappedy);
}

PVector getCurvePositionFromP(float p)
{
  p = ((p%1)+1)%1; // code to loop p and keep it in [0,1[
  float floatIndex = (N-1)*p;
  int index1 = floor(floatIndex);
  int index2 = index1+1;
  float lerpParameter = floatIndex-index1;
  PVector position1 = getCurvePositionFromIndex(index1);
  PVector position2 = getCurvePositionFromIndex(index2);
  PVector lerpedPosition = position1.copy().lerp(position2,lerpParameter);
  return lerpedPosition;
}

void drawCurve()
{
  int numberOfSmallDots = 2345;
  for(int i=0;i<numberOfSmallDots;i++)
  {
    float p = 1.0*i/numberOfSmallDots;
    PVector position = getCurvePositionFromP(p);
    push();
    translate(position.x,position.y);
    stroke(100);
    strokeWeight(2.0);
    point(0,0);
    pop();
  }
}

void drawMovingDotsOnCurve()
{
  int K = 456;
  for(int i=0;i<K;i++)
  {
    float p = (i+t)/K;
    PVector position = getCurvePositionFromP(p);
    push();
    translate(position.x,position.y);
    stroke(0);
    strokeWeight(5);
    point(0,0);
    pop();
  }
}


void setup(){
  size(600,600,P2D);
  result = new int[width*height][3];
  
  fillHilbertPositionsList();
}


void draw_(){
  background(255);
  
  drawCurve();
  drawMovingDotsOnCurve();
}