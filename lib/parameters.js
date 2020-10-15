"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValloxParameter = void 0;
exports.ValloxParameter = {
    "automatichumiditybasiclevelseekerstate": {
        descr: "AutomaticHumidityBasicLevelSeekerState",
        category: "basic",
        modbus_r: 100,
        modbus_w: 100,
        value_type: "number",
    },
    "basichumiditylevel": {
        descr: "BasicHumidityLevel",
        category: "basic",
        modbus_r: 101,
        modbus_w: 101,
        value_type: "range",
        value_def: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    "boostswitchmode": {
        descr: "BoostSwitchMode",
        category: "basic",
        modbus_r: 102,
        modbus_w: 102,
        value_type: "choice",
        value_def: {
            0: "Stoßlüftung",
            1: "Kaminschalter"
        }
    },

    "co2adjuststate": {
        descr: "co2adjuststate",
        category: "basic",
        modbus_r: 103,
        modbus_w: -1,
        value_type: "number",
    },
    "co2alarm": {
        descr: "co2alarm",
        category: "basic",
        modbus_r: 104,
        modbus_w: -1,
        value_type: "number",
    },
    "co2high": {
        descr: "co2high",
        category: "basic",
        modbus_r: 105,
        modbus_w: -1,
        value_type: "number",
    },
    "co2higherspeedrequest": {
        descr: "co2higherspeedrequest",
        category: "basic",
        modbus_r: 106,
        modbus_w: -1,
        value_type: "number",
    },
    "co2low": {
        descr: "co2low",
        category: "basic",
        modbus_r: 107,
        modbus_w: -1,
        value_type: "number",
    },
    "co2lowerratepublicinvitation": {
        descr: "co2lowerratepublicinvitation",
        category: "basic",
        modbus_r: 108,
        modbus_w: -1,
        value_type: "number",
    },
    "co2sensor1": {
        descr: "co2sensor1",
        category: "basic",
        modbus_r: 109,
        modbus_w: -1,
        value_type: "number",
    },
    "co2sensor2": {
        descr: "co2sensor2",
        category: "basic",
        modbus_r: 110,
        modbus_w: -1,
        value_type: "number",
    },
    "co2sensor3": {
        descr: "co2sensor3",
        category: "basic",
        modbus_r: 111,
        modbus_w: -1,
        value_type: "number",
    },
    "co2sensor4": {
        descr: "co2sensor4",
        category: "basic",
        modbus_r: 112,
        modbus_w: -1,
        value_type: "number",
    },
    "co2sensor5": {
        descr: "co2sensor5",
        category: "basic",
        modbus_r: 113,
        modbus_w: -1,
        value_type: "number",
    },
    "co2setpointlower": {
        descr: "co2setpointlower",
        category: "basic",
        modbus_r: 114,
        modbus_w: 114,
        value_type: "range",
        value_def: {
            min: 500,
            max: 2000,
        }
    },
    "co2setpointipper": {
        descr: "co2setpointupper",
        category: "basic",
        modbus_r: 115,
        modbus_w: 115,
        value_type: "range",
        value_def: {
            min: 500,
            max: 2000,
        }
    },
    "cascadeadjust": {
        descr: "cascadeadjust",
        category: "basic",
        modbus_r: 116,
        modbus_w: -1,
        value_type: "number",
    },
    "celldefrostingsetpointtemperature": {
        descr: "celldefrostingsetpointtemperature",
        category: "basic",
        modbus_r: 117,
        modbus_w: 117,
        value_type: "range",
        value_def: {
            min: 0,
            max: 10,
            unit: "°C"
        }
    },
    "currentvoltageincomingonmachine": {
        descr: "currentvoltageincomingonmachine",
        category: "basic",
        modbus_r: 118,
        modbus_w: -1,
        value_type: "number",
    },
    "dampermotorposition": {
        descr: "dampermotorposition",
        category: "basic",
        modbus_r: 119,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Geschlossen/Winter",
            1: "Offen/Sommer"
        }
    },
    "efficiencyaverage": {
        descr: "efficiencyaverage",
        category: "basic",
        modbus_r: 120,
        modbus_w: -1,
        value_type: "number",
    },
    "efficiencyin": {
        descr: "efficiencyin",
        category: "basic",
        modbus_r: 121,
        modbus_w: -1,
        value_type: "number",
    },
    "efficiencyout": {
        descr: "efficiencyout",
        category: "basic",
        modbus_r: 122,
        modbus_w: -1,
        value_type: "number",
    },
    "exhaustfan": {
        descr: "exhaustfan",
        category: "basic",
        modbus_r: 123,
        modbus_w: -1,
        value_type: "number",
    },
    "fanspeed": {
        descr: "fanspeed",
        category: "basic",
        modbus_r: 124,
        modbus_w: 124,
        value_type: "range",
        value_def: {
            min: 1,
            max: 8,
        }
    },
    "fanspeedmax": {
        descr: "fanspeedmax",
        category: "basic",
        modbus_r: 125,
        modbus_w: 125,
        value_type: "range",
        value_def: {
            min: 1,
            max: 8,
        }
    },
    "fanspeedmin": {
        descr: "fanspeedmin",
        category: "basic",
        modbus_r: 126,
        modbus_w: 126,
        value_type: "range",
        value_def: {
            min: 1,
            max: 8,
        }
    },
    "faultindicator": {
        descr: "faultindicator",
        category: "basic",
        modbus_r: 127,
        modbus_w: -1,
        value_type: "number",
    },
    "filterguardindicator": {
        descr: "filterguardindicator",
        category: "basic",
        modbus_r: 128,
        modbus_w: -1,
        value_type: "number",
    },
    "fireplaceboosterstatus": {
        descr: "fireplaceboosterstatus",
        category: "basic",
        modbus_r: 129,
        modbus_w: -1,
        value_type: "number",
    },
    "fireplaceswitchactivation": {
        descr: "fireplaceswitchactivation",
        category: "basic",
        modbus_r: 130,
        modbus_w: -1,
        value_type: "number",
    },
    "flags1": {
        descr: "flags1",
        category: "basic",
        modbus_r: 131,
        modbus_w: -1,
        value_type: "number",
    },
    "frostalarmsensor": {
        descr: "frostalarmsensor",
        category: "basic",
        modbus_r: 132,
        modbus_w: -1,
        value_type: "number",
    },
    "frostalarmwaterradiator": {
        descr: "frostalarmwaterradiator",
        category: "basic",
        modbus_r: 133,
        modbus_w: -1,
        value_type: "number",
    },
    "heatrecoverycellbypasssetpointtemperature": {
        descr: "heatrecoverycellbypasssetpointtemperature",
        category: "basic",
        modbus_r: 134,
        modbus_w: 134,
        value_type: "range",
        value_def: {
            min: 0,
            max: 20,
            unit: "°C"
        }
    },
    "heatingindicator": {
        descr: "heatingindicator",
        category: "basic",
        modbus_r: 135,
        modbus_w: -1,
        value_type: "number",
    },
    "heatingsetpoint": {
        descr: "heatingsetpoint",
        category: "basic",
        modbus_r: 136,
        modbus_w: 136,
        value_type: "range",
        value_def: {
            min: 0,
            max: 20,
            unit: "°C"
        }
    },
    "heatingstate": {
        descr: "heatingstate",
        category: "basic",
        modbus_r: 137,
        modbus_w: -1,
        value_type: "number",
    },
    "humidity": {
        descr: "humidity",
        category: "basic",
        modbus_r: 138,
        modbus_w: -1,
        value_type: "number",
    },
    "humidityco2adjustmentinterval": {
        descr: "humidityco2adjustmentinterval",
        category: "basic",
        modbus_r: 139,
        modbus_w: -1,
        value_type: "number",
    },
    "humiditylowerratepublicinvitation": {
        descr: "humiditylowerratepublicinvitation",
        category: "basic",
        modbus_r: 140,
        modbus_w: -1,
        value_type: "number",
    },
    "humiditysensor1": {
        descr: "humiditysensor1",
        category: "basic",
        modbus_r: 141,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    "humiditysensor2": {
        descr: "humiditysensor2",
        category: "basic",
        modbus_r: 142,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    "initial1": {
        descr: "initial1",
        category: "basic",
        modbus_r: 143,
        modbus_w: -1,
        value_type: "number",
    },
    "initial2": {
        descr: "initial2",
        category: "basic",
        modbus_r: 144,
        modbus_w: -1,
        value_type: "number",
    },
    "initial3": {
        descr: "initial3",
        category: "basic",
        modbus_r: 145,
        modbus_w: -1,
        value_type: "number",
    },
    "initial4": {
        descr: "initial4",
        category: "basic",
        modbus_r: 146,
        modbus_w: -1,
        value_type: "number",
    },
    "initial5": {
        descr: "initial5",
        category: "basic",
        modbus_r: 147,
        modbus_w: -1,
        value_type: "number",
    },
    "inputfanstoptemperaturethreshold": {
        descr: "inputfanstoptemperaturethreshold",
        category: "basic",
        modbus_r: 148,
        modbus_w: 148,
        value_type: "range",
        value_def: {
            min: -6,
            max: 15,
            unit: "°C"
        }
    },
    "lastsystemfault": {
        descr: "lastsystemfault",
        category: "basic",
        modbus_r: 149,
        modbus_w: -1,
        value_type: "number",
    },
    "masterslaveselection": {
        descr: "masterslaveselection",
        category: "basic",
        modbus_r: 150,
        modbus_w: 150,
        value_type: "number",
    },
    "maxspeedlimitfunction": {
        descr: "maxspeedlimitfunction",
        category: "basic",
        modbus_r: 151,
        modbus_w: 151,
        value_type: "number",
    },
    "powerstate": {
        descr: "powerstate",
        category: "basic",
        modbus_r: 152,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Aus (cannot be reverted, device needs to unpluged!",
            1: "An"
        }
    },
    "preheating": {
        descr: "preheating",
        category: "basic",
        modbus_r: 153,
        modbus_w: -1,
        value_type: "number",
    },
    "preheatingstatus": {
        descr: "preheatingstatus",
        category: "basic",
        modbus_r: 154,
        modbus_w: -1,
        value_type: "number",
    },
    "preheatingsetpoint": {
        descr: "preheatingsetpoint",
        category: "basic",
        modbus_r: 155,
        modbus_w: 155,
        value_type: "range",
        value_def: {
            min: -6,
            max: 15,
            unit: "°C"
        }
    },
    "rhadjuststate": {
        descr: "rhadjuststate",
        category: "basic",
        modbus_r: 156,
        modbus_w: -1,
        value_type: "number",
    },
    "radiatortype": {
        descr: "radiatortype",
        category: "basic",
        modbus_r: 157,
        modbus_w: -1,
        value_type: "number",
    },
    "remotemonitoringcontrol": {
        descr: "remotemonitoringcontrol",
        modbus_r: 158,
        modbus_w: -1,
        category: "basic",
        value_type: "number",
    },
    "resumebus": {
        descr: "resumebus",
        category: "basic",
        modbus_r: 159,
        modbus_w: -1,
        value_type: "number",
    },
    "servicereminderindicator": {
        descr: "servicereminderindicator",
        category: "basic",
        modbus_r: 160,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "keine Wartung",
            1: "Wartung"
        }
    },
    "serviceremindermonths ": {
        descr: "serviceremindermonths ",
        category: "basic",
        modbus_r: 161,
        modbus_w: 161,
        value_type: "range",
        value_def: {
            min: 1,
            max: 15,
        }
    },
    "supplyfan": {
        descr: "supplyfan",
        category: "basic",
        modbus_r: 162,
        modbus_w: -1,
        value_type: "number",
    },
    "suspendbusforco2communication": {
        descr: "suspendbusforco2communication",
        category: "basic",
        modbus_r: 163,
        modbus_w: -1,
        value_type: "number",
    },
    "switchlowerspeedrequest": {
        descr: "switchlowerspeedrequest",
        category: "basic",
        modbus_r: 164,
        modbus_w: -1,
        value_type: "number",
    },
    "tempexhaust": {
        descr: "tempexhaust",
        category: "basic",
        modbus_r: 165,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "%"
        }

    },
    "tempincoming": {
        descr: "tempincoming",
        category: "basic",
        modbus_r: 166,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "%"
        }

    },
    "tempinside": {
        descr: "tempinside",
        category: "basic",
        modbus_r: 167,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "%"
        }

    },
    "tempoutside": {
        descr: "tempoutside",
        category: "basic",
        modbus_r: 168,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "%"
        }

    }

};
