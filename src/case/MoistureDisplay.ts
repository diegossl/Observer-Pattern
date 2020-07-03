
type Moisture = number | undefined

export class MoistureDisplay implements Observer {
  
  private subject: Subject
  private moisture: Moisture

  constructor (subject: Subject) {
    this.subject = subject
    this.subject.addObserver(this)
  }

  display (): Moisture {
    return this.moisture
  }

  update(temperature: number, moisture: number, pressure: number): void {
    this.moisture = moisture
  }

}