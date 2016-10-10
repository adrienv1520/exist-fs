/**
 * exist-fs © 2016 Adrien Valcke
 *
 * Add synchronous features to fs for testing if a path exists, is a file or a directory.
 */

const fs = require('fs');
const path = require('path');

module.exports = {

  /**
   * FUNCTION existsSync (synchronous)
   * since fs.existsSync is deprecated use fs.statSync or fs.accessSync
   *
   * @param  {String}       target to something in file system
   * @return {Boolean}      true if path brings to something, false if not
   */
  existsSync: function(target){
    try {
      fs.statSync(path.normalize(target));
      return true;
    } catch (e) {
      return false;
    }
  },

  /**
   * FUNCTION isDirSync (synchronous)
   * use fs.statSync(dir).isDirectory() from fs.Stats Object
   *
   * @param  {String}       dir path to a directory
   * @return {Boolean}      true if path brings to a directory, false if not
   */
  isDirSync: function(dir){
    try {
      let stat = fs.statSync(path.normalize(dir));
      if (stat.isDirectory()) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  },

  /**
   * FUNCTION isFileSync (synchronous)
   * use fs.statSync(file).isFile() from fs.Stats Object
   *
   * @param  {String}       file path to a file
   * @return {Boolean}      true if path brings to a file, false if not
   */
  isFileSync: function(file){
    try {
      let stat = fs.statSync(path.normalize(file));
      if (stat.isFile()) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
};
