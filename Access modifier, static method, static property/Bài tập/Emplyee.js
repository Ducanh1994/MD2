var Employee = /** @class */ (function () {
    function Employee(fullName, dateOfBirth, address, jobPosition) {
        this._fullName = fullName;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._jobPosition = jobPosition;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        set: function (value) {
            this._dateOfBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "jobPosition", {
        get: function () {
            return this._jobPosition;
        },
        set: function (value) {
            this._jobPosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getInfo = function () {
        return this;
    };
    return Employee;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.add = function (employee) {
        this.employees.push(employee);
    };
    EmployeeManager.findAll = function () {
        return this.employees;
    };
    EmployeeManager.findByFullName = function (fullName) {
        var index = -1;
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].fullName == fullName) {
                return i;
            }
        }
        return index;
    };
    EmployeeManager.deleteEmployee = function (fullName) {
        var index = this.findByFullName(fullName);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    };
    EmployeeManager.editEmployee = function (fullName, employeeNew) {
        var index = this.findByFullName(fullName);
        if (index !== -1) {
            this.employees[index] = employeeNew;
        }
    };
    EmployeeManager.employees = [];
    return EmployeeManager;
}());
var employee1 = new Employee('Vũ Ning', '17/04', 'Hà Nam', 'Quét rác');
var employee2 = new Employee('Việt', '09/11', 'Hòa Bình', 'Giám đốc');
EmployeeManager.add(employee1);
EmployeeManager.add(employee2);
// EmployeeManager.deleteEmployee('Vũ Ning');
var employee = new Employee('Hùng', '26/01', 'Nam Định', 'Giám đốc 2');
EmployeeManager.editEmployee('Vũ Ning', employee);
console.log(EmployeeManager.findAll());
