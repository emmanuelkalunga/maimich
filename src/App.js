import React, { Component } from 'react';
import './App.css';
import 'grommet-css';
// import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import Title from 'grommet/components/Title';
import SVGIcon from 'grommet/components/SVGIcon';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import WorldMap from 'grommet/components/WorldMap';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Carousel from 'grommet/components/Carousel';
import Quote from 'grommet/components/Quote';
import ServiceIcon from 'grommet/components/icons/base/Services';
import Footer from 'grommet/components/Footer';
import Label from 'grommet/components/Label';


var services = [{title:'Electrical/Instrumentation/mechanical drawing designs', description:'Please provide a small description of this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title:'Electrical load calculation & sizing', description:'Please provide a small description of this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title:'PLC and SCADA automation design', description:'Please provide a small description of this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title:'Electrical/mechanical installation', description:'Please provide a small description of this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title:'Engineering equipment procurement', description:'Please provide a small description of this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title:'Data Analysis', description:'Please provide a small description of this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title:'Consultancy and general services', description:'Please provide a small description of this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                ];
function ListServices (props) {
  return (
    <Box pad='xlarge'
      colorIndex='neutral-1' full='horizontal' >
      <Box pad='medium'
        colorIndex='accent-2' direction='row' align='center' justify='center' texture='./background.jpg'>
        <Title>
          {/* <ServiceIcon /> */}
          {props.service.title}
        </Title>
      </Box>
    </Box>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {showSideBar: false};
    // this.onClose = this.onClose.bind(this);
    // this.onOpen = this.onOpen.bind(this);
  }
  // onClose() {
  //   this.setState({showSideBar:false})
  // }
  // onOpen() {
  //   this.setState({showSideBar:true})
  // }
  render() {
    return (
      <Article scrollStep={true}>
        <Header fixed={true}
          float={false}
          splash={false}
          size='large'
          alignSelf='center'
          justify='center'
          colorIndex='neutral-1'
          pad={{"horizontal": "large"}}>
          <Title href='#aboutus'>
            <Image src='./logo_mde_half_trans.png'
              full={false}
              size='small'

            />
          </Title>
          <Box direction='row'>
            <Menu responsive={true}
              direction='row'
              inline={true}
              primary={false}
              size='medium'>
              <Anchor href='#aboutus'>
                About us
              </Anchor>
              <Anchor href='#operations'>
                Operations
              </Anchor>
              <Anchor href='#customers'>
                Customers
              </Anchor>
              <Anchor href='#services'>
                Services
              </Anchor>
              <Anchor href='#contactus'>
                Contact us
              </Anchor>
            </Menu>
            <Search inline={true}
              fill={false}
              justify='end'
              size='medium'
              placeHolder=''
              dropAlign={{"right": "right"}} />

          </Box>
        </Header>
        <Hero
          background={<Video autoPlay={true}
            showControls={false}
            loop={true}
            full={true}
            muted={true}
            fit='cover'>
            <source src='hero1.webm'
              type='video/mp4' />
          </Video>}
          // background={<Image src='./hero1.jpg'
          // fit='cover'
          // full={true} />}
          backgroundColorIndex='dark'
          >
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'
              separator='left' >
              <Heading margin='none'>
                MaiMich Design
              </Heading>
              <Heading margin='none' tag='h2'>
                Engineers
              </Heading>
            </Box>
          </Box>
        </Hero>
        <Section pad='medium'
          justify='center'
          align='center'
          full='vertical'
          id='aboutus'>
          <Headline margin='large'>
            About us
          </Headline>
          <Box direction='row'>
            <Box>
              <Image src='./logo_mde_half_trans.png'
                full={false}
                size='large' />
            </Box>
            <Box align='end'>
            <Box align='end'>
              <Paragraph size='xlarge'>
                I want some text about the company to put here.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Paragraph>
            </Box>
            </Box>
          </Box>

        </Section>
        <Section pad='large'
          justify='center'
          align='center'
          full='vertical'
          colorIndex='grey-4'
          id='operations'>
          <Headline margin='none'>
            Operations
          </Headline>
          <Paragraph size='large'>
            MaimichDesign Engineers (Pty) Ltd was founded and incorporated in South-Africa in June 2017.
            It was established to provide cutting-edge engineering services to clients in the area of electrical, mechanical, instrumentation and control engineering.
            This company strive towards achieving an advanced society.
          </Paragraph>
        </Section>
        <Section pad='large'
          justify='center'
          align='center'
          full='vertical'
          id='customers'>
          <Headline margin='none'>
            Customers
          </Headline>

          <List>
            <ListItem justify='between'
              separator='horizontal'>
              <span>
                Government and Private Organisation
              </span>
            </ListItem>

          </List>
        </Section>
        <Section pad='small'
          justify='center'
          align='center'
          full='vertical'
          id='services'>
          <Headline margin='large'>
            Services
          </Headline>
          <Carousel autoplaySpeed={2000} persistentNav={true}>
            {services.map(entry => {return <ListServices service={entry}/>})}
          </Carousel>
          {/* <Box direction='column' size='large' align='start' pad='large'>
            {services.map(entry => {return <AnchorServices service={entry}/>})}
          </Box> */}
        </Section>
        <Section pad='large'
          justify='center'
          align='center'
          full='horizontal'
          id='contactus'>

          <Box direction='row' full='horizontal' justify='between'>
            <Box align='start' full='horizontal'>
              <WorldMap zoom={true} series={[
                                  {continent:"Africa", colorIndex:"neutral-2"},
                                  {continent:"NorthAmerica", colorIndex:"neutral-1"},
                                  // {continent:"SouthAmerica", colorIndex:"neutral-1"},
                                  {continent:"Europe", colorIndex:"neutral-1"},
                                  // {continent:"Asia", colorIndex:"neutral-1"},
                                  {
                                    "place": [-33.989861, 18.565444],
                                    "label": "Rio De Janeiro",
                                    "colorIndex": "graph-4",
                                    "id": "rio-de-janeiro",
                                    "flag": ""
                                  }
                                ]}/>
            </Box>
            <Box align='start' justify='end'>
              <Headline margin='large'>
                Contact Us
              </Headline>
              <Quote size='large'>
                <Paragraph>
                  210 Steve Biko Street,
                </Paragraph>
                <Paragraph>
                  Alma Du Toit Flats, Flat 106,
                </Paragraph>
                <Paragraph>
                  Muckleneuk, Pretoria, 0002.
                </Paragraph>
              </Quote>
            </Box>
          </Box>

        </Section>
        <Footer justify='between'
          size='large' colorIndex='light-2'>
          <Title>
            <Image src='./logo_transparent.png'
              full={false}
              size='medium' />
          </Title>
          <Box>
            <Label>
              Banking details
              <Paragraph>
                First National Bank (FNB) <br />
                Account No. 62702523920
              </Paragraph>
            </Label>

          </Box>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}>
            <Paragraph margin='none'>
              © 2016 Maimich Design Engineers
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#aboutus'>
                About
              </Anchor>
              <Anchor href='#services'>
                Services
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      </Article>
    );
  }
}

export default App;
