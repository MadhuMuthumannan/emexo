import { useForm } from 'react-hook-form';
import './form.css';

export default function Form({ onClose, onFormSubmit, defaultValue }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: defaultValue,
  });

  const onSubmit = (data) => {
    onFormSubmit(data);
  };

  return (
    <div className="add-user-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name:</label>
          <input
            {...register('name', { required: true, maxLength: 20 })}
            className="form-control"
          />
          {errors.name?.type === 'maxLength' && (
            <p role="alert" className="error-message">
              Name should be of max length 20
            </p>
          )}
          {errors.name?.type === 'required' && (
            <p role="alert" className="error-message">
              Name is required
            </p>
          )}
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            {...register('age', { required: true, min: 18, max: 99 })}
            className="form-control"
          />
          {errors.age?.type === 'required' && (
            <p role="alert" className="error-message">
              Age is required
            </p>
          )}
          {errors.age?.type === 'min' && (
            <p role="alert" className="error-message">
              Min age is 18
            </p>
          )}
          {errors.age?.type === 'max' && (
            <p role="alert" className="error-message">
              Max age is 18
            </p>
          )}
        </div>
        {/* <div className="form-group">
          <label>Email:</label>
          <input
            {...register('email', {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className="form-control"
          />
          {errors.email?.type === 'required' && (
            <p role="alert" className="error-message">
              Age is required
            </p>
          )}
          {errors.email?.type === 'pattern' && (
            <p role="alert" className="error-message">
              Not a valid email
            </p>
          )}
        </div> */}
        <div className="form-group">
          <label>Gender:</label>
          <div className="form-check">
            <input
              className="form-check-input"
              {...register('gender', { required: true })}
              type="radio"
              value="Male"
              id="male"
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              {...register('gender', { required: true })}
              type="radio"
              value="Female"
              id="female"
              className="form-check-input"
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
          {errors.gender?.type === 'required' && (
            <p role="alert" className="error-message">
              Gender is required
            </p>
          )}
        </div>
        <div className="form-group">
          <label>Rank:</label>
          <input
            type="text"
            className="form-control"
            {...register('rank', { required: true }, { min: 1, max: 99 })}
          />
          {errors.rank?.type === 'required' && (
            <p role="alert" className="error-message">
              Rank is required
            </p>
          )}
          {errors.rank?.type === 'min' && (
            <p role="alert" className="error-messrank">
              Min rank is 1
            </p>
          )}
          {errors.rank?.type === 'max' && (
            <p role="alert" className="error-message">
              Max rank is 99
            </p>
          )}
          {/* <label>Highest Qualification:</label>

            <div className="form-group">
              <select
                className="form-control"
                {...register('qualification', { required: true })}
              >
                <option value="">-</option>
                <option value="BE/BTech">BE/BTech</option>
                <option value="MTech">MTech</option>
                <option value="BCom">BCom</option>
                <option value="MCom">MCom</option>
                <option value="BSc">BSc</option>
                <option value="MSc">MSc</option>
              </select>
              {errors.qualification?.type === 'required' && (
                <p role="alert" className="error-message">
                  Qualification is required
                </p>
              )}
            </div> */}
        </div>

        <div className="form-group btn-container">
          <input
            type="submit"
            className="btn btn-primary"
            disabled={!isDirty || !isValid}
          />
          <button className="btn btn-primary" onClick={() => onClose()}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
