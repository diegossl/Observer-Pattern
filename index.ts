import { WeatherStation } from './src/case/WeatherStation'
import { TemperatureDisplay } from './src/case/TemperatureDisplay'
import { PressureDisplay } from './src/case/PressureDisplay'
import { MoistureDisplay } from './src/case/MoistureDisplay'

const weatherStation = new WeatherStation(29, 7.5, 18.3)

const temperatureDisplay = new TemperatureDisplay(weatherStation)
const pressureDisplay = new PressureDisplay(weatherStation)
const moistureDisplay = new MoistureDisplay(weatherStation)

weatherStation.addObserver(temperatureDisplay)
weatherStation.addObserver(pressureDisplay)
weatherStation.addObserver(moistureDisplay)

weatherStation.notifyObservers()

console.log(`Temperatura: ${temperatureDisplay.display()}`)
console.log(`Pressão: ${pressureDisplay.display()}`)
console.log(`Umidade: ${moistureDisplay.display()}`)
