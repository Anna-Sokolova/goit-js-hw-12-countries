import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'material-design-icons/iconfont/material-icons.css';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';


PNotify.error({
  text: "Опаньки! Неверный ввод данных! Попробуйте ещё раз!",
});