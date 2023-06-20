function reversestackSt(st) {
  if (st.length === 0) {
    return;
  }

  const top = st.pop();
  reversestackSt(st);
  insertAtBottom(st, top);
}

function insertAtBottom(st, val) {
  if (st.length === 0) {
    st.push(val);
    return;
  }

  const top = st.pop();
  insertAtBottom(st, val);
  st.push(top);
}

// Example 1 :
const st1 = [3, 2, 1, 7, 6];
reversestackSt(st1);
console.log('EXample1 output is:' + st1);

// Example 2 :
const st2 = [4,3,9,6];
reversestackSt(st2);
console.log('EXample2 output is:' + st2);