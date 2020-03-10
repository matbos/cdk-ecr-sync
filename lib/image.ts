export interface Image {
  /**
   * The name of the image that should be proxied by ECR
   *
   */
  readonly imageName: string;
  /**
   * Should the "latest" tag also included? Keep in mind that "latest" is not a version!
   *
   */
  readonly includeLatest?: boolean;
}
