"use strict";

import Modules from '../Modules/Modules';
const mockSetName = jest.fn();
/*jest.mock('../Modules/Modules', () => {
  // Works and lets you check for constructor calls:
  return jest.fn().mockImplementation(() => {
    return {setName: mockSetName};
  });
});

 */
/*
const ModelMobileCompany = new Modules();
let mockSetName = jest.fn();
Modules.mockImplementation(() => {
  return {
    setName: mockSetName
  };
});
*/
jest.mock('../Modules/Modules');

describe('ModulesMobileCompany-test', () => {
/*
  beforeAll(() => {

    Modules.mockImplementation(() => {
      return {
        setName: mockSetName(),
      };
    });

  });

 */

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Modules.mockClear();
    //mockSetName.mockClear();
    //mockSetName.mockReset();
  });



  it('The ModelMobileCompany should be able to call new() on Modules', () => {
    //const Modules = new Modules();
    console.log(Modules());
    expect(Modules).toBeTruthy(); // Constructor ran with no errors
  });

  //const ModelMobileCompany = new Modules();
  it('We can check if the ModelMobileCompany toHaveBeenCalled', () => {
    expect(Modules).not.toHaveBeenCalled();
    //expect(mockSetName).not.toHaveBeenCalled(); // ensure our mockClear() is working
    //const ModelMobileCompany = new Modules();
    //expect(mockSetName).toHaveBeenCalled();
    //mockSetName();
    //expect(mockSetName).toHaveBeenCalled();
    const name = 1;
    const mockModulesInstance = Modules.mock.instances[0];
    const mocksetName = mockModulesInstance.setName;
    expect(mocksetName.mock.calls[0][0]).toEqual(name);
  });

  //const ModelMobileCompany = new Modules();
  it('We can check if the ModelMobileCompany called the class constructor', () => {
    const ModelMobileCompany = new Modules();
    mockSetName();
    expect(mockSetName).toHaveBeenCalledTimes(1);
  });

  it('We can check if the ModelMobileCompany called the class constructor', () => {
    //const ModelMobileCompany = new Modules();
    //let name = 1;
    mockSetName
        .mockReturnValue(1);
    expect(mockSetName.mock.calls[0][0]).toEqual("1");
  });

//const ModelMobileCompany = jest.fn();
  it('should be a class', () => {
    //const ModelMobileCompany = new Modules();
    console.log(mockSetName());
    mockSetName
        .mockReturnValue(1);
    console.log(mockSetName());
    expect(mockSetName
        .mockReturnValue(1)).toBe("1");
  });
    //expect(ModelMobileCompany.setName(2)).toEqual(2);


});
