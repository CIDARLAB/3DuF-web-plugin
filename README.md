# open_in_3DuF_plugin
A simple javascript plugin that will allow you to open your design on 3DuF

# API

## openDesign

`openDesign(fileurl)`

Opens the design on 3DuF.org. Please ensure that the file is available on a public url

### Arguments

`fileurl` - Full public url for 3DuF to open the file


## openDesignWithParamChanges

`openDesignWithParamChanges(fileurl, componentname, params)`

Opens the design on 3DuF.org with the specified component modified according to the given parameters

### Arguments

`fileurl` - Full public url for 3DuF to open the file

`componentname` -  Name of the component that needs to change

`params` - Javascript object key value pairs of parameters that need to change


