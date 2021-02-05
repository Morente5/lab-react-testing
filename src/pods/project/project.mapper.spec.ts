import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('pods/project/project.mapper', () => {
  it('should return empty project when feeding undefined', () => {
    // Arrange
    const project = undefined;
    const expectedResult = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty project when feeding null', () => {
    // Arrange
    const project = null;
    const expectedResult = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with empty array employees when employees are undefined', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: undefined,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with empty array employees when employees are null', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: null,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });


  it('should return a project with empty array employees when employees are empty', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with one employee when passing a project with one employee', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [
        {
          id: 'test employee id',
          employeeName: 'test employee name',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [
        {
          id: 'test employee id',
          employeeName: 'test employee name',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with two employees when passing a project with two employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [
        {
          id: 'test employee id 1',
          employeeName: 'test employee name 1',
        },
        {
          id: 'test employee id 2',
          employeeName: 'test employee name 2',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      employees: [
        {
          id: 'test employee id 1',
          employeeName: 'test employee name 1',
        },
        {
          id: 'test employee id 2',
          employeeName: 'test employee name 2',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

});
