import usePlatforms from './usePlatforms';

const usePlatform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms.results.find(platform => platform.id === platformId)?.name;
};

export default usePlatform;
