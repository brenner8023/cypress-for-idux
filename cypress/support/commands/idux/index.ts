
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
import iStepper from './stepper';
import iCascader from './cascader';
import iCheckbox from './checkbox';
import iDatePicker from './datePicker';
import iDateRangePicker from './dateRangePicker';
import iRate from './rate';
import iSelect from './select';
import iSlider from './slider';
import iSwitch from './switch';
import iTextarea from './textarea';
import iTimePicker from './timePicker';
// import iTimeRangePicker from './timeRangePicker';
import iTransfer from './transfer';
import iTreeSelect from './treeSelect';
// import iUpload from './upload';
import iCard from './card';
import iCarousel from './carousel';

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
  ...iStepper,
  ...iCascader,
  ...iCheckbox,
  ...iDatePicker,
  ...iDateRangePicker,
  ...iRate,
  ...iSelect,
  ...iSlider,
  ...iSwitch,
  ...iTextarea,
  ...iTimePicker,
  // ...iTimeRangePicker,
  ...iTransfer,
  ...iTreeSelect,
  // ...iUpload,
  ...iCard,
  ...iCarousel,

  clickoutside() {
    return cy.get('[data-cy-root]')
      .then($el => {
        $el.trigger('click');
      });
  },
};
