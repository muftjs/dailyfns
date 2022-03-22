/**
 * Get Value from Javascript Objects using dot notation
 * @param object Object - {student : {name: 'test'}}
 * @param path string - 'student.name'
 * @param value any - Returns default value if values is undefined on object
 */
export default function objGetPath(object: any, path: any, value?: any): any;
