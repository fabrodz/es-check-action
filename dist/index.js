module.exports=(()=>{"use strict";var e={351:function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(r(87));function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const i="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=i+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${i}${escapeData(this.message)}`;return e}}function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue;function escapeData(e){return toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r(function(t){t(e)})}return new(r||(r=Promise))(function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=r(351);const u=o(r(87));const s=o(r(622));var a;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(a=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=i.toCommandValue(t);process.env[e]=r;i.issueCommand("set-env",{name:e},r)}t.exportVariable=exportVariable;function setSecret(e){i.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){i.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${s.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){i.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){i.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=a.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){i.issueCommand("debug",{},e)}t.debug=debug;function error(e){i.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){i.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+u.EOL)}t.info=info;function startGroup(e){i.issue("group",e)}t.startGroup=startGroup;function endGroup(){i.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return n(this,void 0,void 0,function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r})}t.group=group;function saveState(e,t){i.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},140:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.executeGitHubAction=void 0;var u=i(r(186));var s=r(129);var a={pathToDistFolder:function(){return getInput("directory")},ecmaVersion:function(){return getInput("ecmaVersion")},filesGlob:function(){return getInput("files")}};function executeGitHubAction(){try{console.info("Checking files in: "+a.pathToDistFolder()+"!");s.execSync("npx es-check "+a.ecmaVersion()+" ./"+a.pathToDistFolder()+"/"+a.filesGlob()+" --verbose")}catch(e){console.error(e.message);u.setFailed(e.message)}}t.executeGitHubAction=executeGitHubAction;function getInput(e){return u.getInput(e)}},144:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});var n=r(140);n.executeGitHubAction()},129:e=>{e.exports=require("child_process")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")}};var t={};function __webpack_require__(r){if(t[r]){return t[r].exports}var n=t[r]={exports:{}};var o=true;try{e[r].call(n.exports,n,n.exports,__webpack_require__);o=false}finally{if(o)delete t[r]}return n.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(144)})();