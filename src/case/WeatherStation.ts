
export class WeatherStation implements Subject {

  private observersList: Observer[] = []
  private temperature: number
  private pressure: number
  private moisture: number

  constructor (temperature: number, pressure: number, moisture: number) {
    this.temperature = temperature
    this.pressure = pressure
    this.moisture = moisture
  }
  
  addObserver (observer: Observer): void {
    this.observersList.push(observer)
  }

  removeObserver (observer: Observer): void {
    let index: number = this.observersList.indexOf(observer)
    if (index > -1) {
      this.observersList.slice(index, 1)
    }
  }

  notifyObservers (): void {
    this.observersList.forEach((observer: Observer) => {
      observer.update(this.temperature, this.moisture, this.pressure)
    })
  }

}