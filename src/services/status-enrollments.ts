export const createStatusEnrollmentServices = (statusEnrollmentData: any): string => {
  return 'createStatusEnrollment';
};

export const getAllStatusEnrollmentsServices = (): string => {
  return 'getAllStatusEnrollments';
};

export const getByIdStatusEnrollmentServices = (statusEnrollmentId: string): string => {
  return 'getByIdStatusEnrollment';
};

export const updateByIdStatusEnrollmentServices = (
  statusEnrollmentId: string,
  statusEnrollmentData: any
): string => {
  return 'updateByIdStatusEnrollment';
};

export const deleteByIdStatusEnrollmentServices = (statusEnrollmentId: string): string => {
  return 'deleteByIdStatusEnrollment';
};
