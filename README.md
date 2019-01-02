# EdiZon Mario + Rabbids config

An [EdiZon](https://github.com/WerWolv98/EdiZon) config generator for "Mario + Rabbids: Kingdom Battle" on Nintendo Switch.
The aim of this project is to provide a structure to a fairly large config file and make maintenance of the cheat config file easy.

**It will remain as the source code ONLY for the final generated config file.**

## Supported options

- Currencies
  - Coins
  - Orbs
- All museum items
- Weapons
  - Mario
  - Rabbids Peach
  - Rabbids Luigi
  - Luigi
  - Rabbids Mario (Coming soon)
  - ...

## Requesting new options

To request new options, please file a github issue with a detailed description and I will look into adding support.

## Getting started

**Requirements**
1. Node v8+ 

**Building**
1. `git clone https://github.com/mschinis/edizon-mario-rabbids-config`
1. `npm run build`
2. Copy the generated config (`010067300059A000.json`) in your switch's `/EdiZon/editor` folder.
3. 🎉

**Deploying**
1. Setup _(Only needed once)_
    - `npm install`
    - Copy `.env.example` to `.env`
    - Update `.env` environment variables
1. `npm run deploy`
2. 🎉

**Building and deploying**
1. `npm run build:deploy`
2. 🎉
