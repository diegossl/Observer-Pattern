
type Temperature = number | undefined

export class TemperatureDisplay implements Observer {

  private subject: Subject
  public temperature: Temperature

  constructor (subject: Subject) {
    this.subject = subject
    this.subject.addObserver(this)
  }

  display (): Temperature {
    return this.temperature
  }

  update(temperature: number, moisture: number, pressure: number): void {
    this.temperature = temperature
  }

}