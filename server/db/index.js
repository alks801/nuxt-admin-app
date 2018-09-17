const dbcontext = require('./db_context_init')
const db = {};


//API Keys
function ApiKey(id, creation, expirity, key, site, status) {
  this.Id = id;
  this.Creation = creation;
  this.Expirity = expirity;
  this.Key = key;
  this.Site = site;
  this.Status = status;
  return this;
}

db.getAPIKeys = async function () {
  let keys = await dbcontext.API_Keys.findAll();
  let res = keys.map(bk => new ApiKey(bk.Id, bk.CREATION, bk.EXPIRY, bk.KEY, bk.SITE, bk.STATUS));
  return res;
}

db.upsertAPIKeys = async function (item) {
  try {
    let whereCondition = {
      where: {
        Id: item.Id
      }
    };

    let dbItem = await dbcontext.API_Keys.find(whereCondition);
    let upsertOdj = {
        Id: item.Id,
        CREATION: item.Creation,
        EXPIRY: item.Expirity,
        KEY: item.Key,
        SITE: item.Site,
        STATUS: item.Status,
    };
    if (dbItem) {
      await dbcontext.API_Keys.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.API_Keys.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
}

//Panel Users
function PanelUser(id, login, fname, lname, apms, asc, aadmin, achn, aconfigs, role, pass) {
  this.Id = id;
  this.Login = login;;
  this.FirstName = fname;
  this.LastName = lname;
  this.PMS = apms;
  this.CS = asc;
  this.Admin = aadmin;
  this.Chn = achn;
  this.Configs = aconfigs;
  this.Role = role;
  this.Pass = pass;
  return this;
}

db.getPanelUsers = async function () {
  let keys = await dbcontext.API_Users.findAll();
  let res = keys.map(u => new PanelUser(u.User_ID, u.User_Login, u.User_FirstNsme, u.User_LastName,
    u.Access_PMS, u.Access_SC, u.Access_Admin, u.Access_Chn, u.Access_Configs, u.Role, u.User_Pass));
  return res;
}

db.CheckAdminAuth = async function({login, pass}) {
    if (!login || !pass) {
        return false;
    }
    console.log(login, pass)
    let user = await  dbcontext.API_Users.find({where: {User_Login: login, User_Pass: pass}});
    console.log('user:' + user)
    return user !== null;
}

db.upsertPanelUsers = async function (item) {
  try {
    let whereCondition = {
      where: {
        User_ID: item.Id
      }
    };

    let dbItem = await dbcontext.API_Users.find(whereCondition);
    let upsertOdj = {
      User_ID: item.Id,
      User_Login: item.Login,
      User_FirstNsme: item.FirstName,
      User_LastName: item.LastName,
      Access_PMS: item.AccountPMS,
      Access_SC: item.AccountCS,
      Access_Admin: item.AccountAdmin,
      Access_Chn: item.AccountChn,
      Access_Configs: item.AccountConfigs,
      Role: item.Role,
      User_Pass: item.Pass
    };
    if (dbItem) {
      await dbcontext.API_Users.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.API_Users.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
}

//Channel Rates
function ChannelRate(id, code, desc, from, to) {
  this.Id = id;
  this.Code = code;
  this.Description = desc;
  this.OpenFrom = from;
  this.OpenTo = to;
  return this;
}

db.getChannelRates = async function () {
  let keys = await dbcontext.Chn_Rates.findAll();
  let res = keys.map(ch => new ChannelRate(ch.Id, ch.Rate_code, ch.Rate_Desc, ch.Open_From, ch.Open_To));
  return res;
}

db.upsertChannelRates = async function (item) {
  try {
    let whereCondition = {
      where: {
        Id: item.Id
      }
    };

    let dbItem = await dbcontext.Chn_Rates.find(whereCondition);
    let upsertOdj = {
      Id: item.Id,
      Rate_code: item.Code,
      Rate_Desc: item.Description,
      Open_From: item.From,
      Open_To: item.To,
    };
    if (dbItem) {
      await dbcontext.Chn_Rates.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.Chn_Rates.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
}

//Channel RoomTypes
function ChannelRoomType(id, code, desc, from, to, inv) {
  this.Id = id;
  this.Code = code;
  this.Description = desc;
  this.From = from;
  this.To = to;
  this.Inventory = inv;
  return this;
}

db.getChannelRoomTypes = async function () {
  let keys = await dbcontext.Chn_RoomTypes.findAll();
  let res = keys.map(ch => new ChannelRoomType(ch.Id, ch.RoomType_Code, ch.RoomType_Desc,
    ch.Open_From, ch.Open_To, ch.Inventory));
  return res;
}

db.upsertChannelRoomTypes = async function (item) {
  try {
    let whereCondition = {
      where: {
        Id: item.Id
      }
    };

    let dbItem = await dbcontext.Chn_RoomTypes.find(whereCondition);
    let upsertOdj = {
      Id: item.Id,
      RoomType_Code: item.Code,
      RoomType_Desc: item.Description,
      Open_From: item.From,
      Open_To: item.To,
      Inventory: item.Inventory,
    };
    if (dbItem) {
      await dbcontext.Chn_RoomTypes.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.Chn_RoomTypes.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
}

//Common Settings
function CommonSetting(id, group, key, val) {
  this.Id = id;
  this.Group = group;
  this.Key = key;
  this.Val = val;
  return this;
}

db.getCommonSettings = async function () {
  let keys = await dbcontext.Comm_Config.findAll();
  let res = keys.map(s => new CommonSetting(s.Id, s.Comm_Group, s.Comm_Key, s.Comm_Value));
  return res;
}

db.upsertCommonSettings = async function (item) {
  try {
    let whereCondition = {
      where: {
        Id: item.Id
      }
    };

    let dbItem = await dbcontext.Comm_Config.find(whereCondition);
    let upsertOdj = {
      Id: item.Id,
      Comm_Group: item.Group,
      Comm_Key: item.Key,
      Comm_Value: item.Val,
    };
    if (dbItem) {
      await dbcontext.Comm_Config.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.Comm_Config.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
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

db.upsertAPIReturnStatuses = async function (item) {
  try {
    let whereCondition = {
      where: {
        Msg_ID: item.Id
      }
    };

    let dbItem = await dbcontext.Msg_ReturnStatus.find(whereCondition);
    let upsertOdj = {
      Msg_ID: item.Id,
      Msg_Code: item.Code,
      Msg_Desc: item.Description,
    };
    if (dbItem) {
      await dbcontext.Msg_ReturnStatus.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.Msg_ReturnStatus.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
}


//Internal Settings
function InternalSetting(id, group, setting, val) {
  this.Id = id;
  this.Group = group;
  this.Setting = setting;
  this.Value = val;
  return this;
}

db.getInternalSettings = async function () {
  let keys = await dbcontext.OPMSE_Settings.findAll();
  let res = keys.map(r => new InternalSetting(r.Id, r.Sett_Group, r.Sett_Setting, r.Sett_Value));
  return res;
}

db.upsertSettings = async function (item) {
  try {
    let whereCondition = {
      where: {
        Id: item.Id
      }
    };

    let dbItem = await dbcontext.OPMSE_Settings.find(whereCondition);
    let upsertOdj = {
      Id: item.Id,
      Sett_Group: item.Group,
      Sett_Setting: item.Setting,
      Sett_Value: item.Value
    };
    if (dbItem) {
      await dbcontext.OPMSE_Settings.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.OPMSE_Settings.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
}


//Dynamic Connections
function DynamicConnection(id, alias, active, connstr, name) {
  this.Id = id;
  this.Alias = alias;
  this.Active = active;
  this.ConnectionString = connstr;
  this.Name = name;
  return this;
}

db.getDynamicConnections = async function () {
  let keys = await dbcontext.Site_Alias.findAll();
  let res = keys.map(r => new DynamicConnection(r.Id, r.ALIAS, r.ACTIVE, r.CONNSTR, r.NAME));
  return res;
}

db.upsertDynamicConnections = async function (item) {
  try {
    let whereCondition = {
      where: {
        Id: item.Id
      }
    };

    let dbItem = await dbcontext.Site_Alias.find(whereCondition);
    let upsertOdj = {
      Id: item.Id,
      ALIAS: item.Alias,
      ACTIVE: item.Active,
      CONNSTR: item.ConnectionString,
      NAME: item.Name,
    };
    if (dbItem) {
      await dbcontext.Site_Alias.update(upsertOdj, whereCondition);
    } else {
      await dbcontext.Site_Alias.create(upsertOdj);
    }
  } catch (error) {
    return error;
  }
}

module.exports = db;
