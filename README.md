# node-red-contrib-microblue

An easy solution to communicate with your micro:bit by bluetooth

__Note:__ Raspbian/linux are currently the only tested OSes. The other platforms as Windows, Mac OS X, FreeBSD should also work.

## Status

This node-red library is in the early stages so things might change and break. Apologies in advance! If the version you use is not stable please try with a previous version.

## Prerequisites

Open at least the uart, accelerometer, magnetometer service on your micro:bit. It is not necessary to pair your micro:bit with your bluetooth device.

### Linux

* Kernel version 3.6 or above
* ```sh libbluetooth-dev```

#### Ubuntu/Debian/Raspbian

```sh
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev
```

Make sure ```node``` is on your path, if it's not, some options:
 * symlink ```nodejs``` to ```node```: ```sudo ln -s /usr/bin/nodejs /usr/bin/node```
 * [install Node.js using the NodeSource package](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

## Install

```sh
npm install node-red-contrib-microblue
```

## Usage

After installing this packages and running Node-RED, the micro:bit bluetooth will be available in your Node-RED environment. Paire your device with your micro:bit, select the correct node for your application and deploi your flow. 

Note: If you want to send data, please choose a string value.

## Bluetooth

* ReadUart
* WriteUart

### Create at
<a href="https://www.listic.univ-smb.fr/en/home/" target="_blank"><img src="assets/logo_listic.png" width="20%" height="20%"></a>

### To Do

- ~~Create node to Read/Write (Uart)~~
- Add node to Read data from accelerometer
- Add node to Read data from magnetometer
- Add node to Read input from the buttons
- Add node to Read/Write input from the IO pins
- Add node to Read/Write on the LED matrix
- Add node to Read temperature
