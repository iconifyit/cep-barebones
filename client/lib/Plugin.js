/*
 * Copyright (c) 2020.-present Atomic Lotus, LLC - Scott Lewis <scott@atomiclotus.net>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* ============================================================ *
 * This file is auto-generated by JsonToJsModel by @atomiclotus *
 * ============================================================ */

var Plugin = function(data) {

    if (! data) data = {};

    var uniqueId = this._generateUUID();

    this.instance = 'Plugin@' + uniqueId;

    /**
     * {string}
     */
    this.primaryKey = 'name';

    /**
     * {string}
     */
    this.name = this._get(data, 'name', uniqueId);
    /**
     * {string[]}
     */
    this.client = this._get(data, 'client', []);
    /**
     * {string[]}
     */
    this.host = this._get(data, 'host', []);
    /**
     * {string[]}
     */
    this.styles = this._get(data, 'styles', []);
    /**
     * {string}
     */
    this.path = this._get(data, 'path', null);
    /**
     * {boolean}
     */
    this.disabled = this._get(data, 'disabled', false);

}

// Getters
/**
 * Gets the value of name
 * @returns {string}
 */
Plugin.prototype.getName = function() {
    return this.name;
}

/**
 * Gets the value of client
 * @returns {string[]}
 */
Plugin.prototype.getClient = function() {
    return this.client;
}

/**
 * Gets the value of host
 * @returns {string[]}
 */
Plugin.prototype.getHost = function() {
    return this.host;
}

/**
 * Gets the value of styles
 * @returns {string[]}
 */
Plugin.prototype.getStyles = function() {
    return this.styles;
}

/**
 * Gets the value of path
 * @returns {string}
 */
Plugin.prototype.getPath = function() {
    return this.path;
}

/**
 * Gets the value of disabled
 * @returns {boolean}
 */
Plugin.prototype.getDisabled = function() {
    return this.disabled;
}

// Setters

/**
 * Sets the value of name
 * @param {string} value  The value to set name to.
 * @returns {string}
 */
Plugin.prototype.setName = function(value) {
    if (! value instanceof String) {
        throw new TypeError('Plugin.setName() requires a String.');
    }
    this.name = value;
    return this.name;
}

/**
 * Sets the value of client
 * @param {array} value  The value to set client to.
 * @returns {string[]}
 */
Plugin.prototype.setClient = function(value) {
    if (! value instanceof Array) {
        throw new TypeError('Plugin.setClient() requires a Array.');
    }
    this.client = value;
    return this.client;
}

/**
 * Sets the value of host
 * @param {array} value  The value to set host to.
 * @returns {string[]}
 */
Plugin.prototype.setHost = function(value) {
    if (! value instanceof Array) {
        throw new TypeError('Plugin.setHost() requires a Array.');
    }
    this.host = value;
    return this.host;
}

/**
 * Sets the value of styles
 * @param {array} value  The value to set styles to.
 * @returns {string[]}
 */
Plugin.prototype.setStyles = function(value) {
    if (! value instanceof Array) {
        throw new TypeError('Plugin.setStyles() requires a Array.');
    }
    this.styles = value;
    return this.styles;
}

/**
 * Sets the value of path
 * @param {string} value  The value to set path to.
 * @returns {string}
 */
Plugin.prototype.setPath = function(value) {
    if (! value instanceof String) {
        throw new TypeError('Plugin.setPath() requires a String.');
    }
    this.path = value;
    return this.path;
}

/**
 * Sets the value of disabled
 * @param {boolean} value  The value to set disabled to.
 * @returns {boolean}
 */
Plugin.prototype.setDisabled = function(value) {
    if (! value instanceof Boolean) {
        throw new TypeError('Plugin.setDisabled() requires a Boolean.');
    }
    this.disabled = value;
    return this.disabled;
}

// Adders
/**
 * Adds a client
 * @param {array} value  The value to add to client.
 * @returns {string[]}
 */
Plugin.prototype.addClient = function(value) {
    if (! value instanceof String) {
        throw new TypeError('Plugin.addClient() requires a String.');
    }
    if (this.client instanceof Array && this.client.indexOf(value) === -1) {
        this.client.push(value);
    }
    return this.client;
}
/**
 * Adds a host
 * @param {array} value  The value to add to host.
 * @returns {string[]}
 */
Plugin.prototype.addHost = function(value) {
    if (! value instanceof String) {
        throw new TypeError('Plugin.addHost() requires a String.');
    }
    if (this.host instanceof Array && this.host.indexOf(value) === -1) {
        this.host.push(value);
    }
    return this.host;
}
/**
 * Adds a styles
 * @param {array} value  The value to add to styles.
 * @returns {string[]}
 */
Plugin.prototype.addStyle = function(value) {
    if (! value instanceof String) {
        throw new TypeError('Plugin.addStyle() requires a String.');
    }
    if (this.styles instanceof Array && this.styles.indexOf(value) === -1) {
        this.styles.push(value);
    }
    return this.styles;
}
// removers

/**
 * Removes a client
 * @param {array} value  The item to remove from client.
 * @returns {string[]}
 */
Plugin.prototype.removeClient = function(value) {
    if (this.client instanceof Array && this.client.indexOf(value) >= 0) {
        var filtered = [];
        this.client.map(function(item) {
            if (item === value) return;
            tmp.push(item);
        });
        this.client = filtered;
    }
    return this.client;
}

/**
 * Removes a host
 * @param {array} value  The item to remove from host.
 * @returns {string[]}
 */
Plugin.prototype.removeHost = function(value) {
    if (this.host instanceof Array && this.host.indexOf(value) >= 0) {
        var filtered = [];
        this.host.map(function(item) {
            if (item === value) return;
            tmp.push(item);
        });
        this.host = filtered;
    }
    return this.host;
}

/**
 * Removes a styles
 * @param {array} value  The item to remove from styles.
 * @returns {string[]}
 */
Plugin.prototype.removeStyle = function(value) {
    if (this.styles instanceof Array && this.styles.indexOf(value) >= 0) {
        var filtered = [];
        this.styles.map(function(item) {
            if (item === value) return;
            tmp.push(item);
        });
        this.styles = filtered;
    }
    return this.styles;
}
// Has-sers

/**
 * Checks to see if `value` exists in client
 * @param {array} value  The value to check client for.
 * @returns {boolean}
 */
Plugin.prototype.hasClient = function(value) {
    return ( this.client instanceof Array && this.client.indexOf(value) >= 0 );
}

/**
 * Checks to see if `value` exists in host
 * @param {array} value  The value to check host for.
 * @returns {boolean}
 */
Plugin.prototype.hasHost = function(value) {
    return ( this.host instanceof Array && this.host.indexOf(value) >= 0 );
}

/**
 * Checks to see if `value` exists in styles
 * @param {array} value  The value to check styles for.
 * @returns {boolean}
 */
Plugin.prototype.hasStyle = function(value) {
    return ( this.styles instanceof Array && this.styles.indexOf(value) >= 0 );
}

// Utility functions

/**
 * Gets the value of an object property by name.
 * @param {object}  subject     The object to search.
 * @param {string}  key         The name of the property to get.
 * @param {*}       fallback    The default value to return if key is not found.
 * @returns {}
 */
Plugin.prototype._get = function(subject, key, fallback) {
    if (typeof subject[key] !== 'undefined') {
        return subject[key];
    }
    return fallback;
}

/**
 * Creates a unique identifier in UUID format.
 */
Plugin.prototype._generateUUID = function() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

/**
 * Get the {Plugin} as on object of key => value pairs.
 * @returns {object}
 */
Plugin.prototype.valueOf = function() {
    return {
        name : this.getName(),
        client : this.getClient(),
        host : this.getHost(),
        styles : this.getStyles(),
        path : this.getPath(),
        disabled : this.getDisabled(),
    }
}

/**
 * Get the {Plugin} as a JSON object.
 * @returns {string}
 */
Plugin.prototype.toJSON = function() {
    return JSON.stringify(this.valueOf());
}

module.exports = Plugin;