export class CityWeather {
    public name: string;
    public main: Temperature;
    public weather: Array<WeatherDetail>;
    public wind: Wind;
}

class Temperature {
    public temp: number;
    public pressure: number;
    public humidity: number;
}

class WeatherDetail {
    public main: string;
    public description: string;
}

class Wind {
    public speed: number;
    public deg: number;
}