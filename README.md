# PortProbe

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](#Contributing)

# About <a name = "about"></a>

PortProbe is a very easy to use port scanning NPM module that is lightweight.


## Installing

This is how you could add PortProbe to your existing project.

Install package

```
npm install portprobe
```

Import module

```
const PortProbe = require('portprobe');
```


## Usage <a name = "usage"></a>

### Scan single port

```
PortProbe.scanPort(${address}, ${port})
```

### Function Paramaters
| Parameter   	| Type    	| Required 	| Default Value 	|
|-------------	|---------	|----------	|---------------	|
| IP address  	| String  	| True     	| N/A           	|
| Port Number 	| Integer 	| True     	| N/A           	|
| Timeout     	| Integer 	| False    	| 3000          	|

### Scan common ports

```
PortProbe.scanCommonPorts(${address})
```

### Function Paramaters
| Parameter   	| Type    	| Required 	| Default Value 	|
|-------------	   |---------	|---------- |---------------	|
| IP address       | String  	| True     	| N/A           	|
| Timeout     	   | Integer 	| False    	| 3000          	|
| Additional Ports | List 	  | False     | []              |


# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


# Authors

- Andrew Abercrombie [@AndrewAbercrombie](https://www.github.com/AndrewAbercrombie)

