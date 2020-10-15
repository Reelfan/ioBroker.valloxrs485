"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValloxParameter = void 0;
exports.ValloxParameter = {
    "automatichumiditybasiclevelseekerstate": {
        descr: "AutomaticHumidityBasicLevelSeekerState",
        category: "basic",
        value_type: "number",
    },
    "basichumiditylevel": {
        descr: "BasicHumidityLevel",
        category: "basic",
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
        value_type: "choice",
        value_def: {
            0: "Stoßlüftung",
            1: "Kaminschalter"
        }
    },

    "co2adjuststate": {
        descr: "co2adjuststate",
        category: "basic",
        value_type: "number",
    },
    "co2alarm": {
        descr: "co2alarm",
        category: "basic",
        value_type: "number",
    },
    "co2high": {
        descr: "co2high",
        category: "basic",
        value_type: "number",
    },
    "co2higherspeedrequest": {
        descr: "co2higherspeedrequest",
        category: "basic",
        value_type: "number",
    },
    "co2low": {
        descr: "co2low",
        category: "basic",
        value_type: "number",
    },
    "co2lowerratepublicinvitation": {
        descr: "co2lowerratepublicinvitation",
        category: "basic",
        value_type: "number",
    },
    "co2sensor1": {
        descr: "co2sensor1",
        category: "basic",
        value_type: "number",
    },
    "co2sensor2": {
        descr: "co2sensor2",
        category: "basic",
        value_type: "number",
    },
    "co2sensor3": {
        descr: "co2sensor3",
        category: "basic",
        value_type: "number",
    },
    "co2sensor4": {
        descr: "co2sensor4",
        category: "basic",
        value_type: "number",
    },
    "co2sensor5": {
        descr: "co2sensor5",
        category: "basic",
        value_type: "number",
    },
    "co2setpointlower": {
        descr: "co2setpointlower",
        category: "basic",
        value_type: "range",
        value_def: {
            min: 500,
            max: 2000,
        }
    },
    "co2setpointipper": {
        descr: "co2setpointupper",
        category: "basic",
        value_type: "range",
        value_def: {
            min: 500,
            max: 2000,
        }
    },
    "cascadeadjust": {
        descr: "cascadeadjust",
        category: "basic",
        value_type: "number",
    },
    "celldefrostingsetpointtemperature": {
        descr: "celldefrostingsetpointtemperature",
        category: "basic",
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
        value_type: "number",
    },
    "dampermotorposition": {
        descr: "dampermotorposition",
        category: "basic",
        value_type: "choice",
        value_def: {
            0: "Geschlossen/Winter",
            1: "Offen/Sommer"
        }
    },
    "efficiencyaverage": {
        descr: "efficiencyaverage",
        category: "basic",
        value_type: "number",
    },
    "efficiencyin": {
        descr: "efficiencyin",
        category: "basic",
        value_type: "number",
    },
    "efficiencyout": {
        descr: "efficiencyout",
        category: "basic",
        value_type: "number",
    },
    "exhaustfan": {
        descr: "exhaustfan",
        category: "basic",
        value_type: "number",
    },
    "fanspeed": {
        descr: "fanspeed",
        category: "basic",
        value_type: "range",
        value_def: {
            min: 1,
            max: 8,
        }
    },
    "fanspeedmax": {
        descr: "fanspeedmax",
        category: "basic",
        value_type: "range",
        value_def: {
            min: 1,
            max: 8,
        }
    },
    "fanspeedmin": {
        descr: "fanspeedmin",
        category: "basic",
        value_type: "range",
        value_def: {
            min: 1,
            max: 8,
        }
    },
    "faultindicator": {
        descr: "faultindicator",
        category: "basic",
        value_type: "number",
    },
    "filterguardindicator": {
        descr: "filterguardindicator",
        category: "basic",
        value_type: "number",
    },
    "fireplaceboosterstatus": {
        descr: "fireplaceboosterstatus",
        category: "basic",
        value_type: "number",
    },
    "fireplaceswitchactivation": {
        descr: "fireplaceswitchactivation",
        category: "basic",
        value_type: "number",
    },
    "flags1": {
        descr: "flags1",
        category: "basic",
        value_type: "number",
    },
    "frostalarmsensor": {
        descr: "frostalarmsensor",
        category: "basic",
        value_type: "number",
    },
    "frostalarmwaterradiator": {
        descr: "frostalarmwaterradiator",
        category: "basic",
        value_type: "number",
    },
    "heatrecoverycellbypasssetpointtemperature": {
        descr: "heatrecoverycellbypasssetpointtemperature",
        category: "basic",
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
        value_type: "number",
    },
    "heatingsetpoint": {
        descr: "heatingsetpoint",
        category: "basic",
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
        value_type: "number",
    },
    "humidity": {
        descr: "humidity",
        category: "basic",
        value_type: "number",
    },
    "humidityco2adjustmentinterval": {
        descr: "humidityco2adjustmentinterval",
        category: "basic",
        value_type: "number",
    },
    "humiditylowerratepublicinvitation": {
        descr: "humiditylowerratepublicinvitation",
        category: "basic",
        value_type: "number",
    },
    "humiditysensor1": {
        descr: "humiditysensor1",
        category: "basic",
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
        value_type: "number",
    },
    "initial2": {
        descr: "initial2",
        category: "basic",
        value_type: "number",
    },
    "initial3": {
        descr: "initial3",
        category: "basic",
        value_type: "number",
    },
    "initial4": {
        descr: "initial4",
        category: "basic",
        value_type: "number",
    },
    "initial5": {
        descr: "initial5",
        category: "basic",
        value_type: "number",
    },
    "inputfanstoptemperaturethreshold": {
        descr: "inputfanstoptemperaturethreshold",
        category: "basic",
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
        value_type: "number",
    },
    "masterslaveselection": {
        descr: "masterslaveselection",
        category: "basic",
        value_type: "number",
    },
    "maxspeedlimitfunction": {
        descr: "maxspeedlimitfunction",
        category: "basic",
        value_type: "number",
    },
    "powerstate": {
        descr: "powerstate",
        category: "basic",
        value_type: "choice",
        value_def: {
            0: "Aus (cannot be reverted, device needs to unpluged!",
            1: "An"
        }
    },
    "preheating": {
        descr: "preheating",
        category: "basic",
        value_type: "number",
    },
    "preheatingstatus": {
        descr: "preheatingstatus",
        category: "basic",
        value_type: "number",
    },
    "preheatingsetpoint": {
        descr: "preheatingsetpoint",
        category: "basic",
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
        value_type: "number",
    },
    "radiatortype": {
        descr: "radiatortype",
        category: "basic",
        value_type: "number",
    },
    "remotemonitoringcontrol": {
        descr: "remotemonitoringcontrol",
        category: "basic",
        value_type: "number",
    },
    "resumebus": {
        descr: "resumebus",
        category: "basic",
        value_type: "number",
    },
    "servicereminderindicator": {
        descr: "servicereminderindicator",
        category: "basic",
        value_type: "choice",
        value_def: {
            0: "keine Wartung",
            1: "Wartung"
        }
    },
    "serviceremindermonths ": {
        descr: "serviceremindermonths ",
        category: "basic",
        value_type: "range",
        value_def: {
            min: 1,
            max: 15,
        }
    },
    "supplyfan": {
        descr: "supplyfan",
        category: "basic",
        value_type: "number",
    },
    "suspendbusforco2communication": {
        descr: "suspendbusforco2communication",
        category: "basic",
        value_type: "number",
    },
    "switchlowerspeedrequest": {
        descr: "switchlowerspeedrequest",
        category: "basic",
        value_type: "number",
    },
    "tempexhaust": {
        descr: "tempexhaust",
        category: "basic",
        value_type: "number",
        value_def: {
            unit: "%"
        }

    },
    "tempincoming": {
        descr: "tempincoming",
        category: "basic",
        value_type: "number",
        value_def: {
            unit: "%"
        }

    },
    "tempinside": {
        descr: "tempinside",
        category: "basic",
        value_type: "number",
        value_def: {
            unit: "%"
        }

    },
    "tempoutside": {
        descr: "tempoutside",
        category: "basic",
        value_type: "number",
        value_def: {
            unit: "%"
        }

    }

};
