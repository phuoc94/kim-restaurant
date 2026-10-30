import { Datepicker, Timepicker } from "tw-elements";

// tw-elements defaults to English, weeks that start on Sunday and a 12-hour clock.
const DATEPICKER_OPTIONS = {
  title: "Valitse päivä",
  format: "dd/mm/yyyy",
  startDay: 1,
  disablePast: true,
  // With its closing animation, removing an open picker (leaving the page with the back button) crashes when the
  // animation ends, and the picker stays on top of the page.
  animations: false,
  monthsFull: [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu",
  ],
  monthsShort: [
    "Tammi",
    "Helmi",
    "Maalis",
    "Huhti",
    "Touko",
    "Kesä",
    "Heinä",
    "Elo",
    "Syys",
    "Loka",
    "Marras",
    "Joulu",
  ],
  weekdaysFull: [
    "Sunnuntai",
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai",
  ],
  weekdaysShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
  weekdaysNarrow: ["S", "M", "T", "K", "T", "P", "L"],
  okBtnText: "OK",
  clearBtnText: "Tyhjennä",
  cancelBtnText: "Peruuta",
  okBtnLabel: "Vahvista valinta",
  clearBtnLabel: "Tyhjennä valinta",
  cancelBtnLabel: "Peruuta valinta",
  nextMonthLabel: "Seuraava kuukausi",
  prevMonthLabel: "Edellinen kuukausi",
  nextYearLabel: "Seuraava vuosi",
  prevYearLabel: "Edellinen vuosi",
  nextMultiYearLabel: "Seuraavat 24 vuotta",
  prevMultiYearLabel: "Edelliset 24 vuotta",
  switchToMultiYearViewLabel: "Valitse vuosi ja kuukausi",
  switchToMonthViewLabel: "Valitse päivä",
  switchToDayViewLabel: "Valitse päivä",
};

const TIMEPICKER_OPTIONS = {
  format12: false,
  format24: true,
  withIcon: false,
  okLabel: "OK",
  clearLabel: "Tyhjennä",
  cancelLabel: "Peruuta",
  invalidLabel: "Virheellinen kellonaika",
};

// Call this once the form's fields are rendered: they appear only after its content has loaded, and a picker cannot
// attach to an element that does not exist yet. Returns the function that removes the pickers.
export const initReservationPickers = (form: HTMLElement) => {
  const dateElement = form.querySelector("[data-te-datepicker-init]");
  const timeElement = form.querySelector("[data-te-timepicker-init]");
  if (!dateElement || !timeElement) {
    return () => undefined;
  }

  const datepicker = new Datepicker(dateElement, DATEPICKER_OPTIONS);
  const timepicker = new Timepicker(timeElement, TIMEPICKER_OPTIONS);

  return () => {
    datepicker.dispose();
    timepicker.dispose();
  };
};
