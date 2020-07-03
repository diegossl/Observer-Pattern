
type Pressure = number | undefined

export class PressureDisplay implements Observer {

  private subject: Subject
  private pressure: Pressure

  constructor (subject: Subject) {
    this.subject = subject
    this.subject.addObserver(this)
  }

  display (): Pressure {
    return this.pressure
  }

  update(temperature: number, moisture: number, pressure: number): void {
    this.pressure = pressure
  }
}