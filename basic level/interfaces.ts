interface Rect {
  readonly id: string; // only for reading
  color?: string; // unnecessary
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: '231',
  size: {
    width: 14,
    height: 12
  },
  color: 'black'
};

const rect2: Rect = {
  id: '231',
  size: {
    width: 14,
    height: 12
  }
};

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Inheritance

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 1,
    height: 4
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};

///////////////////////

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

///////////////////////

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
};
