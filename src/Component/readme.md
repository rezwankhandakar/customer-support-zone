
* What is JSX, and why is it used?
  -JSX হলো JavaScript XML এর সংক্ষিপ্ত রূপ। এটা মূলত React এ ব্যবহৃত হয়। JSX হলো JavaScript এর মধ্যে HTML-এর মতো সিনট্যাক্স লিখার একটি উপায়।

  JSX কেন ব্যবহার করা হয়?
   (Readability): HTML-এর মতো দেখায়, তাই কোড পড়া সহজ হয়।
   UI কে JavaScript-এর সাথে একসাথে ম্যানেজ করা যায়।
   বড় অ্যাপ্লিকেশনে কোডকে modular এবং maintainable রাখে।
   React এর virtual DOM এর জন্য optimized rendering সহজ হয়। 

* What is the difference between State and Props?
   -React এ State এবং Props দুটোই component এর data handling এর জন্য ব্যবহৃত হয়, কিন্তু এদের মধ্যে স্পষ্ট পার্থক্য আছে।
      
    - Props
      Props হলো component এর কাছে data পাঠানোর উপায়।
      Parent → Child direction এ পাঠানো হয়।
      Child component নিজে props পরিবর্তন করতে পারে না। এটা read-only।
      সাধারণত reusable component বানাতে props ব্যবহার করা হয়।

    - State
        State হলো component এর নিজস্ব data।
        Component নিজেই state তৈরি করে এবং পরিবর্তন করতে পারে।
        State পরিবর্তন হলে React automatically UI update করে।
        সাধারণত component এর internal behavior control করতে state ব্যবহার হয়।


        React-এ useState হলো একটি Hook, যা functional component এ state manage করার জন্য ব্যবহৃত হয়।

* What is the useState hook, and how does it work?
   -React-এ useState হলো একটি Hook, যা functional component এ state manage করার জন্য ব্যবহৃত হয়।
     
     -useState এর কাজ
      Component-এর state create এবং manage করতে সাহায্য করে।
      State পরিবর্তন হলে React UI auto update করে।

* How can you share state between components in React?
   -React এ state share করা বলতে বোঝায়, এক component-এর state অন্য component থেকে access বা modify করা।

* How is event handling done in React?
   React-এ event handling হয় camelCase event props ব্যবহার করে, আর function assign করা হয় {} দিয়ে।