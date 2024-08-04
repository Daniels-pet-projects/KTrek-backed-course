export const createEnrollmentServices = (enrollmentData: any): string => {
  return 'createEnrollment';
};

export const getAllEnrollmentsServices = (): string => {
  return 'getAllEnrollments';
};

export const getByIdEnrollmentServices = (enrollmentId: string): string => {
  return 'getByIdEnrollment';
};

export const updateByIdEnrollmentServices = (
  enrollmentId: string,
  enrollmentData: any
): string => {
  return 'updateByIdEnrollment';
};

export const deleteByIdEnrollmentServices = (enrollmentId: string): string => {
  return 'deleteByIdEnrollment';
};
