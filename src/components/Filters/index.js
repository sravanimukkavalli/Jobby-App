import './index.css'

const Filters = props => {
  const {salaryRangesList, employmentTypesList} = props

  const renderEmployeeTypes = () => {
    const {onChangeEmployees, onRemoveEmployees} = props

    return employmentTypesList.map(eachEmployee => {
      const onClickEmployee = () => {
        const element = document.getElementById(
          `checkbox ${eachEmployee.employmentTypeId}`,
        )
        if (element.checked === true) {
          onChangeEmployees(eachEmployee.employmentTypeId)
        } else {
          onRemoveEmployees(eachEmployee.employmentTypeId)
        }
      }
      return (
        <li
          className="ach-employee-item"
          onClick={onClickEmployee}
          key={eachEmployee.employmentTypeId}
        >
          <input
            type="checkbox"
            id={`checkbox ${eachEmployee.employmentTypeId}`}
          />
          <label
            htmlFor={`checkbox ${eachEmployee.employmentTypeId}`}
            className="employee-label"
          >
            {eachEmployee.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryTypes = () => {
    const {onChangeSalary} = props
    return salaryRangesList.map(each => {
      const onClickSalaryId = () => {
        onChangeSalary(each.salaryRangeId)
      }
      return (
        <li
          className="ach-employee-item"
          onClick={onClickSalaryId}
          key={each.salaryRangeId}
        >
          <input
            type="radio"
            name="salary"
            id={`checkbox ${each.salaryRangeId}`}
          />
          <label
            htmlFor={`checkbox ${each.salaryRangeId}`}
            className="employee-label"
          >
            {each.label}
          </label>
        </li>
      )
    })
  }

  const employees = () => (
    <>
      <h1 className="employee-heading">Type of Employement</h1>
      <ul className="unordered-employees-list-container">
        {renderEmployeeTypes()}
      </ul>
    </>
  )

  const salaries = () => (
    <>
      <h1 className="employee-heading">Salary Ranges</h1>
      <ul className="unordered-employees-list-container">
        {renderSalaryTypes()}
      </ul>
    </>
  )

  return (
    <div className="filters-container">
      {employees()}
      <hr className="hr-line" />
      {salaries()}
    </div>
  )
}
export default Filters
