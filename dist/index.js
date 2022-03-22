function capitalize(word) {
    if (!word)
        return '';
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/*
 get Node.js global Variable
*/
function getGlobalVariable() {
    return window;
}

/**
 * Convert dot notation "app.appName" to array of strings ['app', 'appName']
 * @param path: string - "app.appName"
 * @returns strings[] - ['app', 'appName']
 */
function getPathSegments(path) {
    var pathArray = path.split(".");
    var parts = [];
    for (var i = 0; i < pathArray.length; i++) {
        var p = pathArray[i];
        while (p[p.length - 1] === "\\" && pathArray[i + 1] !== undefined) {
            p = p.slice(0, -1) + ".";
            p += pathArray[++i];
        }
        parts.push(p);
    }
    var disallowedKeys = ["__proto__", "prototype", "constructor"];
    var isValidPath = function (pathSegments) { return !pathSegments.some(function (segment) { return disallowedKeys.includes(segment); }); };
    if (!isValidPath(parts)) {
        return [];
    }
    return parts;
}

function gqlParseError(err) {
    // let errstring = JSON.stringify(err, undefined, 2)
    var errstring = JSON.stringify(err);
    var errObj = JSON.parse(errstring);
    return errObj;
}

/**
 *
 * @param value any - Check if values is Javascript Object or not
 * @returns bool - [TRUE | FALSE]
 */
function isObj(value) {
    var type = typeof value;
    return value !== null && (type === "object" || type === "function");
}

/**
 * Check if Object is empty or not
 * @param obj Object
 * @returns bool - [TRUE | FALSE]
 */
function isEmpty(obj) {
    if (undefined == obj)
        return true;
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

/**
 * Get Value from Javascript Objects using array of strings
 * @param object Object - {student : {name: 'test'}}
 * @param path string - ['student', 'name']
 * @param value any - Returns default value if values is undefined on object
 */
function objGetArrayPath(obj, props, defaultValue) {
    if (props === void 0) { props = []; }
    if (defaultValue === void 0) { defaultValue = null; }
    if (undefined == obj || isEmpty(obj))
        return defaultValue;
    props.forEach(function (element) {
        // console.log(element, obj)
        if (undefined == obj || isEmpty(obj) || !Object.prototype.hasOwnProperty.call(obj, element)) {
            obj = defaultValue;
            return;
        }
        obj = obj[element] ? obj[element] : defaultValue; // if obj[element]==null then return defaultValue
    });
    return obj;
}

/**
 * Get Value from Javascript Objects using dot notation
 * @param object Object - {student : {name: 'test'}}
 * @param path string - 'student.name'
 * @param value any - Returns default value if values is undefined on object
 */
function objGetPath(object, path, value) {
    if (value === void 0) { value = null; }
    if (!isObj(object) || typeof path !== "string") {
        // return value === undefined ? object : value;
        return value;
    }
    var pathArray = getPathSegments(path);
    if (pathArray.length === 0) {
        return;
    }
    // console.log(pathArray)
    return objGetArrayPath(object, pathArray, value);
}

/**
 * Get First Error message as string from graphql-request or @types/ApolloError
 * @param err : Error
 * @returns string
 */
function gqlErrorFirstMessage(err, option) {
    var e = gqlParseError(err);
    var errorPaths = [
        "graphQLErrors.0.message",
        "networkError.result.errors[0].message",
        "response.errors.0.message",
        "networkError.result.message",
        "message",
    ];
    var path = errorPaths.find(function (path) { return objGetPath(e, path); });
    var msg = objGetPath(e, path);
    if (option === null || option === void 0 ? void 0 : option.capitalize)
        return capitalize(msg);
    return msg;
}

/**
 * Will return:
 * False for: for all strings with chars
 * True for: false, null, undefined, 0, 0.0, "", " ".
 *
 * @param str
 * @returns {boolean}
 */
function isBlank(str) {
    return (!!!str || /^\s*$/.test(str));
}

export { capitalize, getGlobalVariable, getPathSegments, gqlErrorFirstMessage, gqlParseError, isBlank, isObj, isEmpty as isObjEmpty, objGetArrayPath, objGetPath };
//# sourceMappingURL=index.js.map
