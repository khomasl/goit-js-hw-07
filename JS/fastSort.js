const fastSort = function(array){
    //const m = 12;
    const n = array.length - 1;
    let i,j,l,r,x,w,s; 
    const a = [...array]; 
    const stack = [
        {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0},
        {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0}, {ls: 0, rs: 0},
    ];
 
  console.log('stack :>> ', stack);  
  s = 0; 
  stack[0].ls = 0; 
  stack[0].rs = n;
  do {//{вибір запросу із вершини стека}
    //console.log('s :>> ', s);
    l = stack[s].ls; 
    r = stack[s].rs; 
    s = s - 1;
    do {//{split a[l] ... a[r]}
      i = l; j = r; 
      x = a[Math.round((l + r) / 2)];
      do {
        while (a[i] < x)  {i = i + 1;}
        while (x < a[j])  {j = j - 1;}
        if (i <= j){ 
            w = a[i]; 
            a[i] = a[j];  
            a[j] = w;  
            i = i + 1;  j = j - 1; 
        }
      }    
      while (i < j);
      if (i < r) {    
          s = s + 1; 
          if (s >= stack.length){stack.push({ls: 0, rs: 0})}
          stack[s].ls = i;  
          stack[s].rs = r; 
      };
      r = j;
    }
    while (l <= r);
  }
  while (s !== -1);

  return a;
}

const arr = [2,3,1,4,0,2,3,2,2,5];
for (let i = 0; i < 1000000; i += 1){
    arr[i] = Math.round(Math.random() * (100000 - 1) + 1);
}    
console.log('fastSort(arr) :>> ', fastSort(arr));