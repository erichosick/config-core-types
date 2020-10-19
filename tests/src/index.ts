import { expect } from 'chai';
import { ISourceType, IConfigSource, IConfigContext } from '../../src/index';

describe('types', () => {
  describe('ISourceType', () => {
    it('should expose ISourceType library correctly', () => {
      const sourceType: ISourceType = {
        description: 'Testing interface',
        data: { any: 'object ' },
      };

      expect(sourceType, 'should be an ISourceType').to.be.an('object');
    });
  });

  describe('IConfigContext', () => {
    it('should expose IConfigContext library correctly', () => {
      const configEnvironment: IConfigContext = {
        platform: 'testing',
        compute: 'interface',
        environment: 'testing',
      };

      expect(configEnvironment, 'should be an IConfigContext').to.be.an('object');
    });
  });

  describe('IConfigSource', () => {
    it('should expose IConfigSource library correctly', async () => {
      class TestSource implements IConfigSource {
        // eslint-disable-next-line class-methods-use-this
        public loadConfig(): Promise<ISourceType> {
          return new Promise<ISourceType>((resolve) => {
            resolve({
              description: 'env',
              data: {},
            });
          });
        }
      }

      expect(TestSource, 'should be a TestSource').to.be.a('function');
      const testSource = new TestSource();
      expect(await testSource.loadConfig()).to.deep.equal({
        description: 'env',
        data: {},
      });
    });
  });
});
