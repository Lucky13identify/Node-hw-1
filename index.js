const contacts = require("./db/contacts");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await contacts.listContacts();
      console.log(contacts.listContacts());
      break;

    case "get":
      await contacts.getContactById(id);
      break;

    case "add":
      await contacts.addContact(name, email, phone);
      break;

    case "remove":
      await contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
console.log(arr);
invokeAction(argv);
