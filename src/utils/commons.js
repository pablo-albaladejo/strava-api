import { name, version } from '../../package.json';

export const getPackageName = () => name;
export const getPackageVersion = () => version;
export const getVersionKey = () => `${getPackageName()}-${getPackageVersion()}`;