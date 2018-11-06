import React, { Component } from 'react';
import './App.css';
import Android from './Components/Android';

class App extends Component {
  constructor(){
    super();
    this.state= {
      versions:[
        {
name: 'No codename',
Version: 	'1.0',
releasedate: 'September 23, 2008',
APIlevel:'11'
        },
        {

          name: 'Petit Four',
          Version: 	'1.1',
          releasedate: 'February 9, 2009',
          APIlevel:'2'
        },
         {
           name: 'Cupcake',
           Version: 	'1.5',
           releasedate: 'April 27, 2009',
           APIlevel:'3'
         },
        {
         name: 'Donut',
         Version: 	'1.6',
         releasedate: 'September 15, 2009',
         APIlevel:'4'
        },
        {
          name: 'Eclair',
          Version: 	'1.0',
          releasedate: 'September 23, 2008',
          APIlevel:'5-7'
                  },
         {

                    name: 'Froyo',
                    Version: 	'2.2 - 2.2.3',
                    releasedate: 'May 20, 2010',
                    APIlevel:'8'
                  },
                   {
                     name: 'Gingerbread',
                     Version: 	'2.3 -2.3.7',
                     releasedate: 'December 6, 2010',
                     APIlevel:'9-10'
                   },
                  {
                   name: 'Honeycomb',
                   Version: 	'3.0 -3.2.6',
                   releasedate: 'February 22, 2011',
                   APIlevel:'11-13'
                  },

                  {
                    name: 'Ice Cream Sandwich',
                    Version: 	'4.0 – 4.0.4',
                    releasedate: 'October 18, 2011',
                    APIlevel:'14 – 15'
                            },
                            {

                              name: 'Jelly Bean',
                              Version: 	'4.1 – 4.3.1',
                              releasedate: 'July 9, 2012',
                              APIlevel:'16 – 18'
                            },
                             {
                               name: 'KitKat',
                               Version: 	'4.4 – 4.4.4',
                               releasedate: 'October 31, 2013',
                               APIlevel:'19 – 20'
                             },
                            {
                             name: 'Lollipop',
                             Version: 	'5.0 – 5.1.1',
                             releasedate: 'November 12, 2014',
                             APIlevel:'21 – 22'
                            },
                            {
                              name: 'Marshmallow',
                              Version: 	'6.0 – 6.0.1',
                              releasedate: 'October 5, 2015',
                              APIlevel:'23'
                                      },





                                      {

                                        name: 'Nougat',
                                        Version: 	'7.0 – 7.1.2',
                                        releasedate: 'August 22, 2016',
                                        APIlevel:'24 - 25'
                                      },
                                       {
                                         name: 'Oreo',
                                         Version: 	'8.0 – 8.1',
                                         releasedate: 'August 21, 2017',
                                         APIlevel:'26 - 27'
                                       },
                                      {
                                       name: 'Pie',
                                       Version: 	'9.0',
                                       releasedate: 'August 6, 2018',
                                       APIlevel: '28'
                                      }





      ]
    };

  }
  render() {
    return (
      <div className="App">
        My React Application By Ramesh eerla
        <Android version='Kitkat' versions={this.state.versions}></Android>
      </div>
    );
  }
}

export default App;
