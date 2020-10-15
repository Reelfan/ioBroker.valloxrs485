"use strict";

/*
 * Created with @iobroker/create-adapter v1.29.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
const parameters_1 = require("./lib/parameters");

//try {
//    SerialPort = require("serialport");
//} catch (err) {
//    console.error('Cannot load serialport module'};
//}

// Load your modules here, e.g.:
// const fs = require("fs");

class Valloxrs485 extends utils.Adapter {

	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: "valloxrs485",
		});
		this.on("ready", this.onReady.bind(this));
		this.on("stateChange", this.onStateChange.bind(this));
		// this.on("objectChange", this.onObjectChange.bind(this));
		// this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here
        try {
            // The adapters config (in the instance object everything under the attribute "native") is accessible via
            this.log.debug("config: " + this.config);
            //Setup state objects for Vallox parameters
            for (const [func, attributes] of Object.entries(parameters_1.ValloxParameter)) {
                this.log.info("Setting up state for " + func);
                const mayRead = attributes.modbus_r > -1 ? true : false;
                const mayWrite = attributes.modbus_w > -1 ? true : false;
                //Prepare common section for object
                const commonSettings = {
                    name: attributes.descr,
                    type: "number",
                    role: "value",
                    read: mayRead,
                    write: mayWrite,
                };
                //Add some optional parameters to config
                if (attributes.value_def.unit)
                    commonSettings.unit = attributes.value_def.unit;
                if (attributes.value_type == "choice") {
                    commonSettings.states = attributes.value_def;
                    const numberOfKeys = Object.keys(attributes.value_def).length;
                    if (numberOfKeys == 2)
                        (mayWrite) ? commonSettings.role = "switch" : commonSettings.role = "sensor";
                    else
                        (mayWrite) ? commonSettings.role = "level.mode" : commonSettings.role = "value";
                }
                if (attributes.value_type == "range") {
                    commonSettings.min = attributes.value_def.min;
                    commonSettings.max = attributes.value_def.max;
                }
                //Set some more specific roles
                if (attributes.value_def.unit == "°C")
                    (mayWrite) ? commonSettings.role = "level.temperature" : commonSettings.role = "value.temperature";
                if (attributes.value_def.unit == "rpm")
                    commonSettings.role = "value.speed";
                //Individual treatment for special cases
                if (attributes.common_role_overwrite)
                    commonSettings.role = attributes.common_role_overwrite;
                await this.setObjectNotExistsAsync("parameters." + func, {
                    type: "state",
                    common: commonSettings,
                    native: {},
                });
                //Have a corresponding "lastUpdate" object where a timestamp of data-retrieval is stored
                await this.setObjectNotExistsAsync("lastUpdate." + func, {
                    type: "state",
                    common: {
                        name: attributes.descr,
                        type: "string",
                        role: "date",
                        read: mayRead,
                        write: false
                    },
                    native: {},
                });
            }
            // In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
            this.subscribeStates("parameters.*");
            this.log.info("Starting connector");
            //this.connector = new connector_1.Connector(this, this.config.server, this.config.port, this.config.advancedfunctions, this.config.interval, this.config.reconnectattempts, this.config.reconnectdelayms, this.config.requesttimeoutms);
            //this.connector.initializeSocket();
            this.log.info("Connecting");
            //this.connector.connect();
        }
        catch (error) {
            this.log.error(error.message);
            Promise.reject(error.message);
        }
    }

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			// clearInterval(interval1);

			callback();
		} catch (e) {
			callback();
		}
	}

	// If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
	// You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
	// /**
	//  * Is called if a subscribed object changes
	//  * @param {string} id
	//  * @param {ioBroker.Object | null | undefined} obj
	//  */
	// onObjectChange(id, obj) {
	// 	if (obj) {
	// 		// The object was changed
	// 		this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
	// 	} else {
	// 		// The object was deleted
	// 		this.log.info(`object ${id} deleted`);
	// 	}
	// }

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.message" property to be set to true in io-package.json
	//  * @param {ioBroker.Message} obj
	//  */
	// onMessage(obj) {
	// 	if (typeof obj === "object" && obj.message) {
	// 		if (obj.command === "send") {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info("send command");

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
	// 		}
	// 	}
	// }

}

// @ts-ignore parent is a valid property on module
if (module.parent) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new Valloxrs485(options);
} else {
	// otherwise start the instance directly
	new Valloxrs485();
}