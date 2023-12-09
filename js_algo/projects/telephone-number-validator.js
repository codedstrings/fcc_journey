/*Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 

The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.*/



function telephoneCheck(str) {
    // Updated regex to allow for various phone number formats
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return regex.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
  /*

1. ^: Anchors the regex at the start of the string, ensuring that the entire string is matched.

2. (1\s?)?: This part is an optional group ( ... )? that matches the country code "1" followed by an optional space \s?. This makes the country code and space optional.

3.(\(\d{3}\)|\d{3}): This part matches the area code. It consists of two alternatives within parentheses ( ... ) separated by | (meaning "or"):

    1. \(\d{3}\): Matches an area code enclosed in parentheses, like "(555)".
    2. \d{3}: Matches an area code without parentheses, like "555".

4.([\s\-]?): This part matches an optional space or hyphen after the area code. The square brackets [ ... ] create a character class, 
  and \s matches any whitespace character, while \-(hyphen) matches a literal hyphen. \is escape sequence. [..] is character class-
  matches any of the char's inside it.

5. \d{3}: Matches the next three digits in the phone number, representing the exchange code.

6. ([\s\-]?): Similar to the previous one, it matches an optional space or hyphen after the exchange code.

7. \d{4}: Matches the last four digits in the phone number, representing the subscriber number.

8. $: Anchors the regex at the end of the string, ensuring that the entire string is matched.*/