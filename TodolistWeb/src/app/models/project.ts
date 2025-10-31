export interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

export class Project implements Project {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public createdAt: Date
    ) {}
}