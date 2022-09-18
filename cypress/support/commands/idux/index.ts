
import iInput from './input';
import iButton from './button';
import iInputNumber from './inputNumber';
import iRadio from './radio';
import iHeader from './header';
import iTag from './tag';
import iBreadcrumb from './breadcrumb';
import iBadge from './badge';
import iDropdown from './dropdown';
// import iMenu from './menu';
import iPagination from './pagination';

export const iduxCommands = {
  ...iInputNumber,
  ...iInput,
  ...iButton,
  ...iRadio,
  ...iHeader,
  ...iTag,
  ...iBreadcrumb,
  ...iBadge,
  ...iDropdown,
  // ...iMenu,
  ...iPagination,
};
