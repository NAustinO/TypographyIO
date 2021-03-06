
// const sampleText = `
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt fringilla facilisis. Aliquam id ante at nulla cursus placerat non eu nisi. Duis id ipsum eget elit pulvinar molestie quis eget turpis. Sed semper cursus facilisis. Nulla in aliquet ipsum, eu sollicitudin urna. Donec scelerisque justo elit, nec viverra ex hendrerit rutrum. Quisque semper nisl laoreet lectus pharetra vehicula. Donec quis condimentum ligula. Donec blandit faucibus metus, ac imperdiet massa lobortis vitae. Etiam vel pharetra felis. Maecenas malesuada ultricies est. Mauris ultricies consequat ante gravida viverra. Donec fermentum suscipit dolor, ac sollicitudin sapien commodo in. Nunc pharetra, est vel scelerisque tempus, magna nibh commodo libero, a pellentesque lacus felis ut dolor.

//   Sed pellentesque urna sit amet enim finibus, egestas pharetra lacus interdum. Suspendisse in nisl sapien. Vivamus eu turpis dignissim, porta erat malesuada, vestibulum ipsum. Suspendisse ac fermentum risus. Etiam augue elit, feugiat vitae mattis sit amet, interdum vitae mi. Curabitur at turpis pharetra, faucibus ex ut, faucibus nulla. Curabitur vitae nisi sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sit amet nisl et nunc finibus commodo.

//   Proin orci lorem, cursus id pretium at, condimentum nec lorem. In viverra nunc purus, sit amet dictum lacus vehicula vel. Sed faucibus sem lorem, at iaculis risus blandit sed. Curabitur bibendum ex sit amet lectus dignissim fermentum. Cras tristique ornare dolor, eget faucibus sem sollicitudin id. Cras sollicitudin pharetra leo a laoreet. Phasellus elementum urna ut turpis bibendum, non venenatis quam suscipit. Praesent ultricies dui dolor, quis cursus est porta a. Etiam sed arcu efficitur, lobortis mauris egestas, eleifend lacus. Suspendisse at lacinia ipsum. Praesent cursus volutpat tincidunt. Sed rutrum non tellus eget iaculis.

//   Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Etiam eleifend, turpis sed convallis hendrerit, arcu diam varius purus, nec elementum augue felis et mauris. Ut porttitor lacinia nisi, eu gravida augue semper ac. Curabitur volutpat velit a nisl pellentesque posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dapibus et velit non faucibus. Cras rhoncus consectetur pulvinar. Donec placerat nibh in turpis congue vehicula. Praesent non mattis turpis. In lacinia tortor nec iaculis pretium. Praesent fringilla arcu vel placerat eleifend. Maecenas sagittis maximus dui, eget commodo augue venenatis non.

//   Curabitur tristique enim nec magna venenatis, id malesuada magna sagittis. Sed sed semper metus. Nulla facilisi. Ut iaculis nulla sed viverra facilisis. Nullam nulla urna, faucibus ac viverra aliquet, fringilla ac nisi. Proin nec finibus erat. Proin mi neque, dapibus aliquam gravida eu, efficitur nec mauris. In efficitur mi volutpat, suscipit nulla sed, tempor velit. Cras cursus tristique lectus. Etiam eu risus sed ex tincidunt sollicitudin. Donec interdum vulputate leo. Vivamus commodo, nisl sed malesuada venenatis, libero eros gravida nulla, tincidunt tincidunt nisi ante ac erat. Nam maximus neque quis ante blandit scelerisque.`;


const sampleText = `
fetch(link).then(data=>data.json())
.then(data => { 
  const messageBox = document.getElementById('messagebox');
  if (lastMessageIndex === undefined) {
    lastMessageIndex = data.length - 1;
    for (let i = 0; i < data.length - 1; i++) {
      innerHTML += <div class="message-container">
    messageBox.innerHTML = innerHTML;
    // render(data, messageBox);
  } else {
    console.log(data)
    const unrefreshed = data.slice(0, data.length - lastMessageIndex);
    console.log(unrefreshed)
    for (let i = 0; i < unrefreshed.length - 1; i++) {
      innerHTML += <div class="message-container">
    }
    messageBox.innerHTML = messageBox.innerHTML + innerHTML
    lastMessageIndex = data.length;
    render(unrefreshed, messageBox)
  }
`;
export default sampleText;