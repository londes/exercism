/**
function twoFer 
accepts: name (optional)
returns: if name is defined, returns string with custom name
otherwise, returns default string.
 */

export function twoFer(name?: string): string {
  return name ? 'One for ' + name + ', one for me.' : 'One for you, one for me.';
}
