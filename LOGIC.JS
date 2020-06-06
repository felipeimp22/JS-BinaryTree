// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED



function popularNFeatures(numFeatures, topFeatures, possibleFeatures,
  numFeatureRequests, featureRequests) {
  pF = possibleFeatures.length

  if (numFeatures !== pF) {
    return console.log('the number of features need to be the same of possibleFeatures')
  }

  pFeatures = [possibleFeatures]
  fRequest = [featureRequests]



  pFeatures.forEach((e, i) => {
    newPFeatures = []
    fRequest.forEach((event, index) => {

      event[index].indexOf(e[i]) > -1 ? console.log(e[i], 'Have') : console.log("do not Have")
    })
  })

  console.log(newPFeatures)
}

popularNFeatures(5, 2, ["ancell", "betacellular", "cetracular", "deltacellular", "eurocell"], 3, ["best services provided by ancell", "betacellular has great service", "anacell provides much better services than all other"])


// FUNCTION SIGNATURE ENDS



// 5, 2
// [ancell, betacellular, cetracular, deltacellular, eurocell],
// 3

// best services provided by ancell, betacellular has great service, anacell provides much better services than all other