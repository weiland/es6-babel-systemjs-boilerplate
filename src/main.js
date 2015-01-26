import user from 'user';
import {query, setText, hide} from 'dom';

function mainApp() {
  console.log(`running main app by ${user.name} `);
  updateTitle();
}
function updateTitle() {
  let h1 = query( 'h1');
  let div = query( '#hideMe' );
  setText( h1, 'Hello from ES6' );
  hide( div );
}
mainApp();
