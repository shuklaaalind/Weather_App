import React from 'react';
import Container from 'src/Components/Shared/Container/Container';
import Body from 'src/Components/Shared/Body/Body';
import images from 'src/Assets/images';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/AntDesign';
import Paper from 'src/Components/Shared/Paper/Paper';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      temp: '',
      city: 'Queensland',
      cstate: '',
      icon: '',
      city_display: '',
      desc: '',
      main: '',
      humidity: '',
      pressure: '',
      visiblity: '',
      date: '',
      sunr: '',
      suns: '',
      wind: '',
    };
    this.fetch_weather();
  }

  fetch_weather = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        this.state.city +
        '&appid=c1fb8ed32f38b89cdd94b6f00ae809ee',
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json});
        this.setState({temp: (json.main.temp - 273.15).toFixed(0) + ' °C'});
        this.setState({city_display: json.name});
        this.setState({icon: json.weather[0].icon});
        this.setState({desc: json.weather[0].description});
        this.setState({main: json.weather[0].main});
        this.setState({date: json.dt});
        this.setState({cstate: json.sys.country});
        this.setState({sunr: json.sys.sunrise});
        this.setState({suns: json.sys.sunset});
        this.setState({wind: json.wind.speed + ' km/h'});
        this.setState({humidity: json.main.humidity + ' %'});
        this.setState({pressure: json.main.pressure + ' hPa'});
        this.setState({
          visibility: (json.visibility / 1000).toFixed(2) + ' Km',
        });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({isLoading: false});
      });
  };

  render() {
    if (
      this.state.date >= this.state.sunr &&
      this.state.date <= this.state.suns
    ) {
      var icon = require('src/Assets/images/day.png');
      var theme = '#d16792';
    } else {
      var icon = require('src/Assets/images/night.png');
      var theme = '#001422';
    }
    return (
      <Container>
        <Body>
          <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={theme} />
            <ImageBackground
              source={icon}
              style={styles.Image_Background_Style}>
              <View style={styles.Search_Box_View}>
                <TextInput
                  // editable={false}
                  placeholder="Enter location"
                  value={this.state.city}
                  placeholderTextColor="#FFF"
                  style={styles.Search_Box}
                  onChangeText={(text) => this.setState({city: text})}
                />
                <TouchableOpacity
                  style={styles.button_touch}
                  onPress={() => {
                    this.fetch_weather();
                  }}>
                  <Icon name="search1" size={24} color="#FFF" />
                </TouchableOpacity>
              </View>

              <View style={styles.Weather_Box_Main}>
                <View style={styles.Weather_Holder_View}>
                  <Image
                    tintColor="white"
                    source={{
                      uri:
                        'http://openweathermap.org/img/wn/' +
                        this.state.icon +
                        '@2x.png',
                    }}
                    style={styles.Weather_Image}
                  />
                  <View>
                    <Text style={styles.temprature_text}>
                      {this.state.temp}
                    </Text>
                    <Text style={styles.city_text}>
                      {this.state.city_display},&nbsp;{this.state.cstate}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.Info_Box_View}>
                <View style={styles.Info_Holder_Veiw}>
                  <Paper pv={5} row center middle w100>
                    <Paper ph={10}>
                      <Text style={styles.Main_Weather_Text}>
                        {this.state.main}
                      </Text>
                    </Paper>
                    <Paper>
                      <Text style={styles.description_text}>
                        ({this.state.desc})
                      </Text>
                    </Paper>
                  </Paper>
                  <Paper pv={5} row center middle w100>
                    <Paper ph={10}>
                      <Image source={images.humidity} style={styles.icons} />
                    </Paper>
                    <Paper>
                      <Text style={styles.other_text}>
                        Humidity : {this.state.humidity}
                      </Text>
                    </Paper>
                  </Paper>
                  <Paper pv={5} row center middle w100>
                    <Paper ph={10}>
                      <Image source={images.gauge} style={styles.icons} />
                    </Paper>
                    <Paper>
                      <Text style={styles.other_text}>
                        Pressure : {this.state.pressure}
                      </Text>
                    </Paper>
                  </Paper>
                  <Paper pv={5} row center middle w100>
                    <Paper ph={10}>
                      <Image source={images.witness} style={styles.icons} />
                    </Paper>
                    <Paper>
                      <Text style={styles.other_text}>
                        Visibility : {this.state.visibility}
                      </Text>
                    </Paper>
                  </Paper>
                  <Paper pv={5} row center middle w100>
                    <Paper ph={10}>
                      <Image source={images.wind} style={styles.icons} />
                    </Paper>
                    <Paper>
                      <Text style={styles.other_text}>
                        Wind : {this.state.wind}
                      </Text>
                    </Paper>
                  </Paper>
                </View>
              </View>
            </ImageBackground>
          </SafeAreaView>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
  },
  Image_Background_Style: {
    height: '100%',
    width: '100%',
  },
  Search_Box_View: {
    height: '20%',
    width: '100%',
    paddingHorizontal: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Search_Box: {
    height: '30%',
    width: '60%',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 15,
    color: '#FFF',
    paddingHorizontal: 15,
  },
  button_touch: {
    marginLeft: '1%',
    height: '35%',
    width: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Weather_Box_Main: {
    height: '30%',
    width: '100%',
    marginTop: '-5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Weather_Holder_View: {
    height: '80%',
    width: '90%',
    backgroundColor: 'rgbargba(0, 0, 0, 0.70)',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Weather_Image: {
    height: '80%',
    width: '50%',
  },
  temprature_text: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '2%',
  },
  city_text: {
    fontSize: 20,
    color: 'white',
    marginLeft: '5%',
    marginTop: '3%',
  },
  Info_Box_View: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Info_Holder_Veiw: {
    height: '80%',
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    borderRadius: 15,
  },
  Main_Weather_Text: {
    alignSelf: 'center',
    fontSize: 50,
    color: '#FFF',
    marginLeft: '0%',
    marginTop: '5%',
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  description_text: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFF',
    marginTop: '3%',
    marginBottom: '3%',
  },
  humidity_text: {
    fontSize: 18,
    color: '#FFF',
  },
  other_text: {
    fontSize: 18,
    color: '#FFF',
    marginTop: '2%',
  },
  icons: {
    height: 25,
    width: 25,
  },
});
