function isIPAddress(ip) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ip,
    )
  ) {
    return true;
  }
  return false;
}

const userIp1 = "115.42.150.37";
const userIp2 = "192.168.0";
const userIp3 = "110.234.52.124";
const userIp4 ="123.34.453/453"
console.log(isIPAddress(userIp1));
console.log(isIPAddress(userIp2));
console.log(isIPAddress(userIp3));
console.log(isIPAddress(userIp4));

function findRGBA(text) {
  const rgbaRegExp =
    /^rgba\(\s*(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*(?:0|1|0?\.\d+)\s*\)$/;

  if (rgbaRegExp.test(text)) {
    return {
      color: text,
      isValid: true,
    };
  }
  return "RUSLAN";
}

const userRGBA1 = "rgb(255, 255, 255, 0.84)";
const userRGBA2 = "rgba(174, 0, 0, 0.84)";
const userRGBA3 = "rgba(0, 21, 255, 0.84)";
console.log(findRGBA(userRGBA1));
console.log(findRGBA(userRGBA2));
console.log(findRGBA(userRGBA3));


console.log(findHexColor("#fff, #00FF00."));

// FIND HTML TAGS

function findTags(text, tag) {
  const tagRegex = new RegExp(`<${tag}.*?>.*?<\/${tag}>`, "gi");
  const matches = text.match(tagRegex);

  return matches || [];
}

const html = "<div>Hello!</div> <p>dear</p> <div>world</div>";
console.log(findTags(html, "div"));

// FIND POSITIVE NUMBER

function findPosNum(text) {
  const matches = text.match(/\d+/g);

  if (!matches) {
    return [];
  }

  return matches.map(Number).filter((n) => n > 0);
}

console.log(findPosNum("10, 20, 1, 3, 4"));

// FIND DATES

function findDates(text) {
  const dateRegex = /\d{4}-\d{2}-\d{2}/g;
  const matches = text.match(dateRegex);

  return matches || [];
}

console.log(findDates("today is 2024-05-20, but yesterday was 2024-05-19"));

// FIND EMAIL

function findEmail(text) {
  const emailRegexp = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const matches = text.match(emailRegexp);

  return matches || [];
}

console.log(findEmail("test@gmail.com"));


