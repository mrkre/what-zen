import zendesk from 'node-zendesk';
import config from '../config';

class ZendeskAdaptor {
  constructor() {
    this.client = zendesk.createClient({
      username: config.zendesk.username,
      token: config.zendesk.token,
      remoteUri: config.zendesk.remoteUri,
    });
  }
}

export default ZendeskAdaptor;
