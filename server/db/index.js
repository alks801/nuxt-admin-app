const dbcontext = require('./db_context_init')
const db = {};


//API Keys
function ApiKey(creation, expirity, key, site, status) {
    this.Creation = creation;
    this.Expirity = expirity;
    this.Key = key;
    this.Site = site;
    this.Status = status;
    return this;
}

db.getAPIKeys = async function () {
    let keys = await dbcontext.API_Keys.findAll();
    let res = keys.map(bk => new ApiKey(bk.CREATION, bk.EXPIRY, bk.KEY, bk.SITE, bk.STATUS));
    return res;
}


//Panel Users
function PanelUser(id, login, fname, lname, apms, asc, aadmin, achn, aconfigs, role) {
    this.Id = id;
    this.Login = login;;
    this.FirstName = fname;
    this.LastName = lname;
    this.AccountPMS = apms;
    this.AccountCS = asc;
    this.AccountAdmin = aadmin;
    this.AccountChn = achn;
    this.AccountConfigs = aconfigs;
    this.Role = role;
    return this;
}

db.getPanelUsers = async function () {
    let keys = await dbcontext.API_Users.findAll();
    let res = keys.map(u => new PanelUser(u.User_ID, u.User_Login, u.User_FirstNsme, u.User_LastName, u.Access_PMS, u.Access_SC, u.Access_Admin, u.Access_Chn, u.Access_Configs, u.Role));
    return res;
}


//Channel Rates
function ChannelRate(code, desc, from, to) {
    this.Code = code;
    this.Description = desc;
    this.OpenFrom = from;
    this.OpenTo = to;
    return this;
}

db.getChannelRates = async function () {
    let keys = await dbcontext.Chn_Rates.findAll();
    let res = keys.map(ch => new ChannelRate(ch.Rate_code, ch.Rate_Desc, ch.Open_From, ch.Open_To));
    return res;
}


//Channel RoomTypes
function ChannelRoomType(code, desc, from, to, inv) {
    this.Code = code;
    this.Description = desc;
    this.From = from;
    this.To = to;
    this.Inventory = inv;
    return this;
}

db.getChannelRoomTypes = async function () {
    let keys = await dbcontext.Chn_RoomTypes.findAll();
    let res = keys.map(ch => new ChannelRoomType(ch.RoomType_Code, ch.RoomType_Desc, ch.Open_From, ch.Open_To, ch.Inventory));
    return res;
}


//Common Settings
function CommonSetting(group, key, val) {
    this.Group = group;
    this.Key = key;
    this.Val = val;
    return this;
}

db.getCommonSettings = async function () {
    let keys = await dbcontext.Comm_Config.findAll();
    let res = keys.map(s => new CommonSetting(s.Comm_Group, s.Comm_Key, s.Comm_Value));
    return res;
}


//API Return Statuses
function APIReturnStatus(id, code, desc) {
    this.Id = id;
    this.Code = code;
    this.Description = desc;
    return this;
}

db.getAPIReturnStatuses = async function () {
    let keys = await dbcontext.Msg_ReturnStatus.findAll();
    let res = keys.map(r => new APIReturnStatus(r.Msg_ID, r.Msg_Code, r.Msg_Desc));
    return res;
}


//Internal Settings
function InternalSetting(group, setting, val) {
    this.Group = group;
    this.Setting = setting;
    this.Value = val;
    return this;
}

db.getInternalSettings = async function () {
    let keys = await dbcontext.OPMSE_Settings.findAll();
    let res = keys.map(r => new InternalSetting(r.Sett_Group, r.Sett_Setting, r.Sett_Value));
    return res;
}


//Dynamic Connections
function DynamicConnection(alias, active, connstr, name){
    this.Alias = alias;
    this.Active = active;
    this.ConnectionString = connstr;
    this.Name = name;
    return this;
}

db.getDynamicConnections = async function () {
    let keys = await dbcontext.Site_Alias.findAll();
    let res = keys.map(r => new DynamicConnection(r.ALIAS, r.ACTIVE, r.CONNSTR, r.NAME));
    return res;
}

module.exports = db;