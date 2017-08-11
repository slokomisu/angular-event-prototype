export class FacebookEvent {
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location: string;


  constructor(name: string, description: string, startTime: Date, endTime: Date, location: string) {
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
}
